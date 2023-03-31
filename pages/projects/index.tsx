import Layout from "@components/Layout";
import PostLayout from "@components/PostLayout";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import useProjectsCategories from "./../../src/hooks/useProjectsCategories";

function PostPage() {
  const router = useRouter();
  const { data: categories } = useProjectsCategories();
  const catInitial = categories ? categories[0].id : "";
  router.push("projects/" + catInitial);

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
