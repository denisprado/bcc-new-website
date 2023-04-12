import Box from "@components/Box";
import { Key, useState } from "react";
import useHistory from "src/hooks/useHistory";

export default function History() {
  const { data: history } = useHistory();
  const [active, setActive] = useState<string | undefined>("2018");
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

  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center my-16">
      <Box
        className="container w-full flex flex-col gap-4 justify-start items-stretch mx-auto min-h-[500px]"
        color="neutral"
      >
        <div className="carousel">
          {historyGrouped?.map(
            (hist: {
              id: Key | null | undefined;
              ano: string;
              itens: { id: string; description: string }[];
            }) => {
              return (
                hist && (
                  <div
                    key={hist.id}
                    id={hist.ano ? hist.ano : ""}
                    className="carousel-item w-full"
                  >
                    <div className="flex flex-col gap-4 justify-start">
                      <h3 className="font-bold text-2xl text-accent">
                        {hist.ano ? hist.ano : ""}
                      </h3>
                      <div className="flex flex-row items-stretch h-full gap-4">
                        {hist &&
                          hist.itens.map((h) => (
                            <div
                              className="flex-1 text-xl rounded-lg  text-white  border-white hover:border-accent bg-primary 
															pointer-events-none p-5"
                              key={hist.id}
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
        <div className="flex flex-row justify-start  w-full gap-2">
          <div
            className={`relative py-5 px-8 flex items-center justify-center border bg-accent rounded-xl bg-[url("/structuralImages/ilustra-fundo-white.svg")] bg-cover`}
          >
            <a id="values" />
            <p className={"text-white font-light text-center text-4xl"}>
              Nossa história
            </p>
          </div>
          {historyGrouped
            ?.sort()
            .map(
              (hist: {
                id: Key | null | undefined;
                ano: string;
                itens: { id: string; description: string }[];
              }) => (
                <a
                  key={hist.id}
                  href={`#${hist.ano}`}
                  onClick={() => setActive(hist.ano)}
                  className={`rounded-lg flex justify-center items-center border text-4xl font-light flex-1 py-12 ${
                    active === hist.ano
                      ? "border-accent btn-accent text-white"
                      : "btn-primary btn-outline"
                  }`}
                >
                  {hist && hist.ano}
                </a>
              )
            )}
        </div>
      </Box>
    </div>
  );
}
