import Clients from "@components/Clients";
import Layout from "@components/Layout";
import Loading from "@components/Loading";
import ServiceLayout from "@components/ServiceLayout";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useServiceByCategory from "src/hooks/useServices";
import useServiceCategories from "src/hooks/useServicesCategories";
function ServicePage() {
  const router = useRouter();
  const { categoryId } = router.query;

  const { data: categories } = useServiceCategories();
  const catInitial = categories ? categories[0].id : "";

  const id =
    typeof categoryId === "string" && categoryId !== undefined
      ? categoryId
      : catInitial;
  const { data: services, isLoading, isError } = useServiceByCategory(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error</div>;
  }
  const container = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const item = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <div className="w-full">
        <motion.ul
          variants={container}
          initial="closed"
          animate="open"
          className="container  mx-auto grid grid-cols-1 p-4 sm:grid-cols-3 lg:grid-cols-4 m-4 min-h[120px] gap-4 min-h-full"
        >
          {services &&
            services.map((service) => {
              return (
                <motion.li
                  key={service.id}
                  variants={item}
                  className={
                    "p-5 sm:p-6 md:p-8 lg:px-10 lg:py-8 border border-t-4 flex flex-col gap-2  border-info bg-info/5"
                  }
                >
                  <p className="text-sm sm:text-md md:text-xl lg:text-2xl font-regular">
                    {service.description}
                  </p>
                </motion.li>
              );
            })}
        </motion.ul>
      </div>
      <Clients />
    </>
  );
}

ServicePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ServiceLayout>{page}</ServiceLayout>
    </Layout>
  );
};

ServicePage.noLayout = true;
export default ServicePage;
