import Box from "@components/Box";
import VideoHero from "@components/VideoHero";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ReactNode } from "react";
import useProjectsCategories from "src/hooks/useProjectsCategories";
interface LayoutProps {
  children: ReactNode;
}

export default function PostLayout({ children }: LayoutProps) {
  const { data: postCategories, isLoading, isError } = useProjectsCategories();
  const router = useRouter();
  const { categoryId } = router.query;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Box color="neutral" className="w-full">
      <VideoHero
        text={""}
        hasButton={false}
        buttonLabel={"Saiba mais"}
        buttonHref={"#serv"}
        videoUrl={
          "https://emuuocvkyaoflsbclvbr.supabase.co/storage/v1/object/public/videos/projetos-comp.mp4"
        }
      />

      <div className="flex flex-col items-center justify-center w-full mt-16">
        <div className="container flex items-center justify-between px-11 w-full border-b border-[--tab-border-color]">
          <h2 className="text-3xl text-accent">Projetos & cia</h2>
          <div className="outline outline-white">
            {postCategories?.map((cat) => {
              const tabStyle =
                categoryId === cat.id
                  ? "tab-active text-accent bg-accent"
                  : "bg-primary/75 text-white ";
              return (
                <Link
                  scroll={false}
                  href={`${cat.id}`}
                  className={`tab mx-1 tab-lg tab-lifted border border-white ${tabStyle}`}
                  key={cat.id}
                >
                  {cat.description}
                </Link>
              );
            })}
          </div>
        </div>
        {children}
      </div>
    </Box>
  );
}
