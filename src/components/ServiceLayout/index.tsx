import Box from "@components/Box";
import VideoHero from "@components/VideoHero";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Image from "next/image";
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
        <div className="container flex items-center justify-between px-11 w-full border-b border-[--tab-border-color]">
          <h2 className="text-3xl text-accent">O que fazemos</h2>
          <div className="outline outline-white">
            {serviceCategories?.map((cat) => {
              const tabStyle =
                categoryId === cat.id
                  ? "tab-active text-accent bg-accent"
                  : "bg-primary/75 text-white ";
              return (
                <>
                  <Link
                    className={`tab mx-1 tab-lg tab-lifted border border-white ${tabStyle}`}
                    key={cat.id}
                    scroll={false}
                    href={`${cat.id}`}
                  >
                    {cat.title}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {serviceCategories?.map((cat) => {
        const img = cat.image ? JSON.parse(cat.image) : "";
        const url = img[0]?.url;
        return (
          categoryId === cat.id && (
            <div className="w-full container grid grid-cols-12 mt-5 mx-5 px-5 pt-5 gap-4">
              {url && (
                <div className="col-span-3 relative">
                  <Image
                    src={url}
                    fill
                    alt={""}
                    style={{ objectFit: "cover" }}
                    className="w-full "
                  />
                </div>
              )}
              {cat.description && (
                <Box className="col-span-9 p-10 justify-center place-content-center">
                  <h2
                    className="text-1xl font-light sm:text-2xl md:text-3xl lg:text-4xl text drop-shadow-2xl"
                    style={{ lineHeight: 1.15 }}
                  >
                    {cat.description}
                  </h2>
                </Box>
              )}
            </div>
          )
        );
      })}
      {children}
    </Box>
  );
}
