import Box from "@components/Box";
import Card from "@components/Card";
import useProjects from "src/hooks/useProjects";
import useProjectsCategories from "src/hooks/useProjectsCategories";
import useWindowDimensions from "src/hooks/useWindowDimensions";

function FeaturedPostsDesktop() {
  const { data: allCategories } = useProjectsCategories();
  const { data: projects } = useProjects();

  return allCategories ? (
    <Box
      color="neutral"
      className="flex flex-row items-stretch justify-center gap-4 mx-4"
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
  ) : (
    <p>Nenhum resultado encontrado</p>
  );
}

function FeaturedPostsMobile() {
  const { data: allCategories } = useProjectsCategories();
  const { data: projects } = useProjects();

  return allCategories ? (
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
