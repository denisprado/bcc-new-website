// import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import { GetServerSideProps } from "next";
import { authProvider } from "src/authProvider";
import React, { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import {
  Edit,
  ListButton,
  RefreshButton,
  useForm,
  useSelect,
} from "@refinedev/antd";
import { Alert, Button, Form, Input, Select, Upload } from "antd";
// import { RcFile } from "antd/lib/upload/interface";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

import { IPosts, IPostCategory, IServiceCategory } from "src/interfaces";
import { supabaseClient } from "src/utility";
import { RcFile } from "antd/es/upload";
import { normalizeFile } from "src/utility/normalizeFile";
// import { supabaseClient, normalizeFile } from "src/utility";

const PostEdit: React.FC = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<IPosts>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
  });

  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect<IPostCategory>({
    resource: "PostCategories",
    defaultValue: postData?.id_post_category.id,
    optionLabel: "description",
  });
  const { selectProps: serviceCategorySelectProps } =
    useSelect<IServiceCategory>({
      resource: "ServiceCategories",
      defaultValue: postData?.id_service_category?.id,
      optionLabel: "title",
    });

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
          label="Title"
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
          label="Ano"
          name="year"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={"2023"} />
        </Form.Item>
        <Form.Item
          label="Cliente"
          name="client"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input defaultValue={"2023"} />
        </Form.Item>
        <Form.Item
          label="Link externo"
          name="url"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input defaultValue={"2023"} />
        </Form.Item>
        <Form.Item
          label="Category"
          name="id_post_category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Público"
          name="id_service_category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...serviceCategorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Content"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor />
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

export default PostEdit;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent("/posts")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
