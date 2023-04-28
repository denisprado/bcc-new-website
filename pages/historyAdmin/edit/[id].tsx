// import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { authProvider } from "src/authProvider";

import { Edit, ListButton, RefreshButton, useForm } from "@refinedev/antd";
import { Alert, Button, Form, Input } from "antd";
// import { RcFile } from "antd/lib/upload/interface";

import { IPostCategory } from "src/interfaces";
// import { supabaseClient, normalizeFile } from "src/utility";

const ServiceEdit: React.FC = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<IPostCategory>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
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
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Data do evento" name="date">
          <Input style={{ width: "100%" }} />
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
        destination: `${redirectTo}?to=${encodeURIComponent("/historyAdmin")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
