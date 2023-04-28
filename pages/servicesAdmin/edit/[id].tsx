// import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { authProvider } from "src/authProvider";

import {
  Edit,
  ListButton,
  RefreshButton,
  useForm,
  useSelect,
} from "@refinedev/antd";
import { Alert, Button, Form, Input, Select } from "antd";
// import { RcFile } from "antd/lib/upload/interface";

import { IServiceCategory, IServices } from "src/interfaces";
// import { supabaseClient, normalizeFile } from "src/utility";

const ServiceEdit: React.FC = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<IServices>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
  });

  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect<IServiceCategory>({
    resource: "ServiceCategories",
    defaultValue: postData?.id_category_service.id,
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
        <Form.Item
          label="Category"
          name="id_category_service"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        {/* <Form.Item
					label="Content"
					name="description"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item> */}
        {/* <Form.Item label="Images">
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
								const fileUrl = `project-images/image/${rcFile.name}`;

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
				</Form.Item> */}
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
        destination: `${redirectTo}?to=${encodeURIComponent("/postsAdmin")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
