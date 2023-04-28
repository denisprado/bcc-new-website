import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { GetServerSideProps } from "next";
import { authProvider } from "src/authProvider";
import { IServiceCategory } from "src/interfaces";

const ServicesCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<IServiceCategory>({
    liveMode: "manual",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Content"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
