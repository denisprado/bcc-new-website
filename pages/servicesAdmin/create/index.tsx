import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Select } from "antd";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { authProvider } from "src/authProvider";
import { IServiceCategory, IServices } from "src/interfaces";

const ServicesCreate: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IServices>({
    liveMode: "manual",
  });

  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect<IServiceCategory>({
    resource: "PostCategories",
    defaultValue: postData?.id_category_service.id,
    optionLabel: "title",
  });

  const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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
        destination: `${redirectTo}?to=${encodeURIComponent("/services")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
