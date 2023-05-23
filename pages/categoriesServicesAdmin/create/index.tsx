import { RcFile } from "@pankod/refine";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Upload } from "antd";
import { GetServerSideProps } from "next";
import { authProvider } from "src/authProvider";
import { IServiceCategory } from "src/interfaces";
import { supabaseClient } from "src/utility";
import { normalizeFile } from "src/utility/normalizeFile";

const ServicesCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<IServiceCategory>({
    liveMode: "manual",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
                    .from("project-images")
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

export default ServicesCreate;

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
