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

  console.log(history, historyGrouped);

  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center my-16">
      <h2 className="text-accent uppercase font-bold text-4xl my-8">
        Nossa história
      </h2>

      <Box
        className="w-6/12 flex flex-row-reverse justify-start items-stretch mx-auto min-h-[500px]"
        color="neutral"
      >
        <div className="carousel mx-5 rounded-lg border-2">
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
                    <div className="flex flex-col p-5 gap-8 justify-start items-start bg-primary">
                      <h3 className="font-bold text-2xl text-accent">
                        {hist.ano ? hist.ano : ""}
                      </h3>

                      {hist &&
                        hist.itens.map((h) => (
                          <div
                            className="text-xl text-white border-l-4 border-white hover:border-accent pointer-events-none pl-4"
                            key={hist.id}
                          >
                            {h.description}
                          </div>
                        ))}
                    </div>
                  </div>
                )
              );
            }
          )}
        </div>
        <div className="flex flex-col justify-start w-full gap-2 ">
          {historyGrouped?.map(
            (hist: {
              id: Key | null | undefined;
              ano: string;
              itens: { id: string; description: string }[];
            }) => (
              <a
                key={hist.id}
                href={`#${hist.ano}`}
                onClick={() => setActive(hist.ano)}
                className={`btn btn-lg px-14 ${
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
