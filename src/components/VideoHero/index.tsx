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
        <source src={`${videoUrl}#t=0.1`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute h-screen  bottom-24 justify-center z-50">
        <Link className={"scroll-smooth"} href={buttonHref}>
          <svg
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            className="arrows"
          >
            <path className="a1" d="M0 0 L30 32 L60 0" strokeWidth={4}></path>
            <path className="a2" d="M0 20 L30 52 L60 20" strokeWidth={6}></path>
            <path className="a3" d="M0 40 L30 72 L60 40" strokeWidth={8}></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default VideoHero;
