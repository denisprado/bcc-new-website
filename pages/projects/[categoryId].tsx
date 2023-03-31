import Clients from "@components/Clients";
import Layout from "@components/Layout";
import PostLayout from "@components/PostLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useProjectsCategoriesById from "src/hooks/useProjectsCategoriesById";
import useProjectByCategory from "src/hooks/useProjectsByCategory";
import useProjectCategories from "src/hooks/useProjectsCategories";
import Card from "@components/Card";
import React from "react";
function ProjectPage() {
  const router = useRouter();
  const { categoryId } = router.query;

  const { data: categories } = useProjectCategories();
  const catInitial = categories ? categories[0].id : "";
  const id =
    typeof categoryId === "string" && categoryId !== undefined
      ? categoryId
      : catInitial;
  const { data: Projects, isLoading, isError } = useProjectByCategory(id);
  const { data: category } = useProjectsCategoriesById(id);
  console.log(category);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="container grid grid-cols-3 m-4 min-h[120px] gap-4">
        {Projects &&
          Projects.map((project) => {
            return (
              <Card
                key={project.id}
                sessionName={category && category[0]?.description}
                title={project.title}
                description={project.description}
              />
            );
          })}
      </div>
      <div className="container">
        <Clients />
      </div>
    </>
  );
}

ProjectPage.noLayout = true;

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <PostLayout>{page}</PostLayout>
    </Layout>
  );
};

export default ProjectPage;
