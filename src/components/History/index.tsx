import Box from "@components/Box";
import { Key, useState } from "react";
import useHistory from "src/hooks/useHistory";

export default function History() {
  const { data: history } = useHistory();
  const [active, setActive] = useState<string | number | undefined>(2018);
  const historyGrouped = history
    ? history.reduce((acc, obj) => {
        const ano = new Date(obj.date).getFullYear();
        const grupo = acc.find((g: { ano: number }) => g.ano === ano);
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
              ano: { toString: () => string | undefined };
              itens: { id: string; description: string }[];
            }) => {
              return (
                hist && (
                  <div
                    key={hist.id}
                    id={hist.ano ? hist.ano.toString() : ""}
                    className="carousel-item w-full"
                  >
                    <div className="flex flex-col p-5 gap-8 justify-start items-start">
                      {hist &&
                        hist.itens.map((h) => (
                          <div className="text-xl" key={hist.id}>
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
              ano: { toString: () => string | undefined };
              itens: { id: string; description: string }[];
            }) => (
              <a
                key={hist.id}
                href={`#${hist.ano}`}
                onClick={() => setActive(hist.ano.toString())}
                className={`btn btn-lg btn-primary px-14 ${
                  active === hist.ano ? "btn-accent" : "btn-primary"
                }`}
              >
                {hist && hist.ano.toString()}
              </a>
            )
          )}
        </div>
      </Box>
    </div>
  );
}
