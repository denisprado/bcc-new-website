import Link from "next/link";
import Box from "@components/Box";
import Button from "@components/Button";

interface VideoHeroProps {
  text: string;
  hasButton: boolean;
  buttonLabel: string;
  buttonHref: string;
  videoUrl: string;
}

function VideoHero({
  text,
  hasButton = false,
  buttonLabel = "Saiba mais",
  videoUrl,
  buttonHref,
}: VideoHeroProps) {
  return (
    <header className="relative flex min-h-[486px] justify-center h-screen overflow-hidden">
      <Box className="container bg-transparent pt-52 mr-0 bg-bottom relative z-30 ">
        <div className="flex-col w-fit max-w-4xl p-5 lg:flex-row-reverse">
          {text && (
            <Box className="bg-primary opacity-90 px-6 pt-6 pb-8 rounded-md">
              <h1
                className="text-6xl text font-light mb-8 drop-shadow-2xl"
                style={{ lineHeight: 1.15 }}
              >
                {text}
              </h1>
              {hasButton && (
                <Button type={"cta"}>
                  <Link href={buttonHref}>{buttonLabel}</Link>
                </Button>
              )}
            </Box>
          )}
        </div>
      </Box>
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={videoUrl + "#t=0.1"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default VideoHero;
