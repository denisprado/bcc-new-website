import Layout from "@components/Layout";
import PostLayout from "@components/PostLayout";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import useProjectsCategories from "./../../src/hooks/useProjectsCategories";
import { GetServerSideProps } from "next";

function PostPage() {
  const router = useRouter();
  const { data: categories } = useProjectsCategories();
  const catInitial = categories ? categories[0].id : "";
  // router.push("projects/" + catInitial);
  useEffect(() => {
    router.push(
      { pathname: "projects/[categoryId]", query: { categoryId: catInitial } },
      "projects/"
    );
  }, [catInitial, router]);

  return <></>;
}

PostPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <PostLayout>{page}</PostLayout>
    </Layout>
  );
};

PostPage.noLayout = true;
export default PostPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.statusCode = 401;

  return {
    props: {},
  };
};
