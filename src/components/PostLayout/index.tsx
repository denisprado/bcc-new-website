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

      <div className="flex flex-col items-center justify-center w-full">
        <div className="my-4 tabs">
          {postCategories?.map((cat) => {
            const tabStyle =
              categoryId === cat.id ? "tab-active text-primary" : "";
            return (
              <Link
                scroll={false}
                href={`${cat.id}`}
                className={`${tabStyle} tab tab-bordered tab-lg`}
                key={cat.id}
              >
                {cat.description}
              </Link>
            );
          })}
        </div>
        {children}
      </div>
    </Box>
  );
}
