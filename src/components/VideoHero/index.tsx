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
      <Box className="container relative z-30 pt-32 mr-0 bg-transparent bg-bottom sm:pt-36 xl:pt-52 ">
        <div className="flex-col p-5 max-w-fit lg:max-w-4xl w-fit lg:flex-row-reverse">
          {text && (
            <Box className="px-6 pt-6 pb-8 rounded-md bg-primary opacity-90">
              <h1
                className="mb-8 text-3xl font-light sm:text-4xl md:text-5xl lg:text-6xl text drop-shadow-2xl"
                style={{ lineHeight: 1.15 }}
              >
                {text}
              </h1>
              {hasButton && (
                <Button type={"cta"}>
                  <Link className={"scroll-smooth"} href={buttonHref}>
                    {buttonLabel}
                  </Link>
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
