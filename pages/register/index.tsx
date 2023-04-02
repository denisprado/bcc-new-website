import { AuthPage } from "@refinedev/antd";
import { GetServerSideProps } from "next";

import { authProvider } from "src/authProvider";

export default function Register() {
  return (
    <AuthPage
      type="register"
      providers={[
        {
          name: "google",
          label: "Sign in with Google",
        },
      ]}
      formProps={{
        initialValues: {
          email: "denisforigo@gmail.com",
          password: "clipper02",
        },
      }}
    />
  );
}

Register.noLayout = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authenticated } = await authProvider.check(context);

  if (authenticated) {
    return {
      props: {},
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
