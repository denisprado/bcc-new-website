import Box from "@components/Box";
import { Key, useState } from "react";
import useHistory from "src/hooks/useHistory";

export default function History() {
  const { data: history } = useHistory();
  const [active, setActive] = useState<string | undefined>("2018");

  const scrollUp = () => {
    const element = document.getElementById("hist");
    if (element) {
      element.scrollIntoView();
    }
  };
  const historyGrouped = history
    ? history.reduce((acc, obj) => {
        const ano = new Date(obj.date).getFullYear().toString();
        const grupo = acc.find((g: { ano: string }) => g.ano === ano);
        if (grupo) {
          grupo.itens.push(obj);
        } else {
          acc.push({ ano: ano, itens: [obj] });
        }
        return acc;
      }, [])
    : null;

  function setActiveAndNavigate(hist: {
    id?: Key | null | undefined;
    ano: string;
    itens?: { id: string; description: string }[];
  }) {
    scrollUp();
    setActive(hist.ano);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <Box
        className="container flex flex-col items-stretch justify-start w-full gap-4 mx-auto"
        color="neutral"
      >
        <div className="flex flex-row flex-wrap justify-start w-full gap-2">
          <div
            className={`relative w-full md:w-fit py-5 px-8 flex items-center justify-center border bg-accent rounded-xl bg-[url("/structuralImages/ilustra-fundo-white.svg")] bg-cover`}
          >
            <a id="values" />
            <p
              id="hist"
              className={"text-white font-light text-center text-4xl"}
            >
              Nossa história
            </p>
          </div>
          {historyGrouped?.sort().map(
            (
              hist: {
                id: Key | null | undefined;
                ano: string;
                itens: { id: string; description: string }[];
              },
              i: string
            ) => (
              <a
                key={i}
                href={`#${hist.ano}`}
                onClick={() => {
                  setActiveAndNavigate(hist);
                }}
                className={`rounded-lg flex justify-center items-center border text-lg sm:text-xl md:text-2xl lg:text-3xl font-light flex-1 py-4 sm:py-6 md:py-6 ${
                  active === hist.ano
                    ? "border-accent btn-accent text-white"
                    : "btn-primary bg-primary/90"
                }`}
              >
                {hist && hist.ano}
              </a>
            )
          )}
        </div>
        <div className="carousel scroll-pt-[24rem] xl:-scroll-ml-6 xl:-scroll-pt-[24rem] snap-x">
          {historyGrouped?.map(
            (
              hist: {
                id: Key | null | undefined;
                ano: string;
                itens: { id: string; description: string }[];
              },
              i: string
            ) => {
              return (
                hist && (
                  <div
                    key={i}
                    id={hist.ano ? hist.ano : ""}
                    className="w-full scroll-mt-[24rem] xl:scroll-mt-[6rem] carousel-item"
                  >
                    <div className="flex flex-col justify-start gap-4">
                      <div className="flex flex-col items-stretch h-full gap-4 sm:flex-row">
                        {hist &&
                          hist.itens.map((h) => (
                            <div
                              className="flex-1 p-5 text-sm bg-white border rounded-lg pointer-events-none border-info/75 bg-info/10 text-primary border-primary sm:text-base md:text-md lg:text-lg hover:border-accent"
                              key={h.id}
                            >
                              {h.description}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )
              );
            }
          )}
        </div>
      </Box>
    </div>
  );
}
