import Card from "@components/Card";
import Layout from "@components/Layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import usePostById from "src/hooks/useProjectsById";
import useProjectsCategoriesById from "src/hooks/useProjectsCategoriesById";
function ProjectPage() {
  const router = useRouter();
  const { postId } = router.query;

  const id = typeof postId === "string" ? postId : "";

  const { data: post, isLoading, isError } = usePostById(id);
  const { data: category } = useProjectsCategoriesById(post?.id_post_category);
  console.log(post, category);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="container grid grid-cols-3 gap-4 m-4">
        <Card
          sessionName={category?.description}
          title={post?.title}
          description={post?.description}
        />
      </div>
    </>
  );
}

ProjectPage.noLayout = true;

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectPage;
