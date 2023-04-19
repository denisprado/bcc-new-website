import Box from "@components/Box";
import Clients from "@components/Clients";
import Layout from "@components/Layout";
import ServiceLayout from "@components/ServiceLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useServiceCategoriesById from "src/hooks/useServiceCategoriesById";
import useServiceByCategory from "src/hooks/useServices";
import useServiceCategories from "src/hooks/useServicesCategories";
function ServicePage() {
  const router = useRouter();
  const { categoryId } = router.query;

  const { data: categories } = useServiceCategories();
  const catInitial = categories ? categories[0].id : "";
  console.log(catInitial);
  const id =
    typeof categoryId === "string" && categoryId !== undefined
      ? categoryId
      : catInitial;
  const { data: services, isLoading, isError } = useServiceByCategory(id);
  const { data: category } = useServiceCategoriesById(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 m-4 min-h[120px] gap-4">
        {services &&
          services.map((service) => {
            return (
              <Box
                key={service.id}
                className={"p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-2"}
              >
                <h3 className="text-accent">{category && category[0].title}</h3>
                <p className="text-sm sm:text-md md:text-xl lg:text-2xl font-regular">
                  {service.description}
                </p>
              </Box>
            );
          })}
      </div>
      <div className="container">
        <Clients />
      </div>
    </>
  );
}

ServicePage.noLayout = true;

ServicePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ServiceLayout>{page}</ServiceLayout>
    </Layout>
  );
};

export default ServicePage;
