import Box from "@components/Box";
import VideoHero from "@components/VideoHero";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import useServiceCategories from "src/hooks/useServicesCategories";
interface LayoutProps {
  children: ReactNode;
}

export default function ServiceLayout({ children }: LayoutProps) {
  const {
    data: serviceCategories,
    isLoading,
    isError,
  } = useServiceCategories();
  const router = useRouter();
  const { categoryId } = router.query;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Box
      color="neutral"
      className="flex flex-col items-center justify-center w-full"
    >
      <Box className={"w-full"} color="neutral">
        <VideoHero
          text={
            "Oferecemos soluções para empresas e organizações que buscam tornar-se mais sustentáveis"
          }
          hasButton={true}
          buttonLabel={"O que fazemos"}
          buttonHref={"#serv"}
          videoUrl={
            "https://emuuocvkyaoflsbclvbr.supabase.co/storage/v1/object/public/videos/que-fazemos-comp.mp4"
          }
        />
      </Box>
      <a id="serv" className="scroll-mt-8" />
      <div className="flex flex-col items-center justify-center w-full mt-16">
        <div className="container flex justify-center w-full border-b border-[--tab-border-color]">
          <div className="outline outline-white">
            {serviceCategories?.map((cat) => {
              const tabStyle =
                categoryId === cat.id
                  ? "tab-active text-accent bg-accent"
                  : "bg-primary/75 text-white ";
              return (
                <Link
                  className={`tab mx-1 tab-lg tab-lifted border border-white ${tabStyle}`}
                  key={cat.id}
                  scroll={false}
                  href={`${cat.id}`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {children}
    </Box>
  );
}
