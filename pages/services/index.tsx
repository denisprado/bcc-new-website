import Layout from "@components/Layout";
import ServiceLayout from "@components/ServiceLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useServiceCategories from "src/hooks/useServicesCategories";

function ServicePage() {
  const router = useRouter();
  const { data: categories } = useServiceCategories();
  const catInitial = categories ? categories[0].id : "";
  router.push("services/" + catInitial);

  return <></>;
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
