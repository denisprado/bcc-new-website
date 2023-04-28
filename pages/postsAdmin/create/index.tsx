import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { authProvider } from "src/authProvider";
import { IPostCategory, IPosts } from "src/interfaces";
import { supabaseClient } from "src/utility";
import { normalizeFile } from "src/utility/normalizeFile";

import { RcFile } from "antd/es/upload";

const PostsCreate: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IPosts>({
    liveMode: "manual",
  });

  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect<IPostCategory>({
    resource: "PostCategories",
    defaultValue: postData?.id_post_category.id,
    optionLabel: "description",
  });

  const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          initialValue={"2023"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
          <Input />
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
          <Input />
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

        <Form.Item label="Image">
          <Form.Item
            name="image"
            valuePropName="fileList"
            normalize={normalizeFile}
            noStyle
          >
            <Upload.Dragger
              name="image"
              listType="picture"
              multiple
              customRequest={async ({ file, onError, onSuccess }) => {
                try {
                  const rcFile = file as RcFile;

                  await supabaseClient.storage
                    .from("project-images")
                    .upload(`images/${rcFile.name}`, file, {
                      cacheControl: "3600",
                      upsert: true,
                    });

                  const { data } = supabaseClient.storage
                    .from("videos")
                    .getPublicUrl(`${rcFile.name}`);

                  const xhr = new XMLHttpRequest();
                  onSuccess && onSuccess({ url: data?.publicUrl }, xhr);
                } catch (error) {
                  onError && onError(new Error("Upload Error"));
                }
              }}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
};

export default PostsCreate;

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
