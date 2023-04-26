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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="container grid grid-cols-1 sm:grid-cols-2 p-4 lg:grid-cols-3 xl:grid-cols-4 m-4 min-h-[120px] gap-4">
        {Projects &&
          Projects.map((project) => {
            return (
              <Card
                key={project.id}
                sessionName={category && category?.description}
                title={project.title}
                client={project.client}
                year={project.year}
                description={project.description}
                buttonHref={project?.url ?? ""}
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
