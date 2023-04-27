import Box from "@components/Box";
import Card from "@components/Card";
import Link from "next/link";
import useProjects from "src/hooks/useProjects";
import useProjectsCategories from "src/hooks/useProjectsCategories";
import useWindowDimensions from "src/hooks/useWindowDimensions";

function FeaturedPostsDesktop() {
  const { data: allCategories } = useProjectsCategories();
  const { data: projects } = useProjects();

  return allCategories ? (
    <div className="flex flex-col items-center justify-center w-full mt-16 ">
      <div className="flex flex-col container justify-center border-b-2 border-[--tab-border-color] w-full">
        <Link
          className={`tab mx-auto tab-lg tab-lifted  tab-active text-accent outline outline-white bg-accent`}
          href={`projects`}
        >
          Destaques de Projetos & cia
        </Link>
      </div>
      <Box
        color="neutral"
        className="flex flex-row items-stretch justify-center gap-4 mx-4 my-4"
      >
        {allCategories.map((cat) =>
          projects?.map((project) =>
            project?.featured && project.id_post_category === cat.id ? (
              <Card
                className="w-1/4"
                key={project.id}
                sessionName={cat.description}
                title={project.title}
                description={project.description}
              />
            ) : (
              <></>
            )
          )
        )}
      </Box>
    </div>
  ) : (
    <p>Nenhum resultado encontrado</p>
  );
}

function FeaturedPostsMobile() {
  const { data: allCategories } = useProjectsCategories();
  const { data: projects } = useProjects();

  return allCategories ? (
    <div className="items-center justify-center mt-16 lg:flex lg:flex-col lg:w-full">
      <div className="justify-center border-b border-gray-200 lg:flex lg:container lg:w-full">
        <div className="outline outline-white">
          <Link
            className={`tab mx-1 tab-lg tab-lifted border border-white`}
            scroll={false}
            href={`projects`}
          >
            Projetos & cia
          </Link>
          <div className="max-w-full p-4 space-x-4 carousel carousel-center rounded-box">
            {allCategories.map((cat) =>
              projects?.map((project) =>
                project?.featured && project.id_post_category === cat.id ? (
                  <div key={project.id} className="relative carousel-item w-60">
                    <Card
                      sessionName={cat.description}
                      title={project.title}
                      description={project.description}
                    />
                  </div>
                ) : (
                  <></>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Nenhum resultado encontrado</p>
  );
}

export default function FeaturedPosts() {
  const windowsDimendions = useWindowDimensions();
  const { width } = windowsDimendions;

  const Component =
    width && width < 768 ? FeaturedPostsMobile : FeaturedPostsDesktop;
  return <Component />;
}
