// import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { authProvider } from "src/authProvider";

import { Edit, ListButton, RefreshButton, useForm } from "@refinedev/antd";
import { Alert, Button, Form, Input, Upload } from "antd";
// import { RcFile } from "antd/lib/upload/interface";
import { RcFile } from "antd/es/upload";
import { IServiceCategory } from "src/interfaces";

import { supabaseClient } from "src/utility";
import { normalizeFile } from "src/utility/normalizeFile";
// import { supabaseClient, normalizeFile } from "src/utility";

const ServiceEdit: React.FC = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<IServiceCategory>(
    {
      liveMode: "manual",
      onLiveEvent: () => {
        setIsDeprecated(true);
      },
    }
  );

  const handleRefresh = () => {
    queryResult?.refetch();
    setIsDeprecated(false);
  };

  return (
    <Edit
      saveButtonProps={saveButtonProps}
      headerProps={{
        extra: (
          <>
            <ListButton />
            <RefreshButton onClick={handleRefresh} />
          </>
        ),
      }}
    >
      {isDeprecated && (
        <Alert
          message="This post is changed. Reload to see it's latest version."
          type="warning"
          style={{
            marginBottom: 20,
          }}
          action={
            <Button onClick={handleRefresh} size="small" type="ghost">
              Refresh
            </Button>
          }
        />
      )}

      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Título"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descrição"
          name="description"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Images">
          <Form.Item
            name="image"
            valuePropName="image"
            normalize={normalizeFile}
            noStyle
          >
            <Upload.Dragger
              name="image"
              listType="picture"
              customRequest={async ({ file, onError, onSuccess }) => {
                const rcFile = file as RcFile;
                const fileUrl = `images/${rcFile.name}`;

                const { error } = await supabaseClient.storage
                  .from("project-images")
                  .upload(fileUrl, file, {
                    cacheControl: "3600",
                    upsert: true,
                  });

                if (error) {
                  return onError?.(error);
                }
                const { data } = supabaseClient.storage
                  .from("project-images")
                  .getPublicUrl(fileUrl);

                onSuccess?.({ url: data?.publicUrl }, new XMLHttpRequest());
              }}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default ServiceEdit;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent(
          "/categoriesAdmin"
        )}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
