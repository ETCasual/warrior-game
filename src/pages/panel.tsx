/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { qData, type Question } from "@/data";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

const PanelPage = () => {
  const staticData = qData;

  const [currentQ, setCurrentQ] = useState("q1");

  const firestore = useFirestore();
  const currentQRef = doc(firestore, "game", "current");
  const gameRef = doc(firestore, "game", currentQ);

  const updateCurrentQ = async (q: string) => {
    await updateDoc(currentQRef, {
      current: q,
    });
  };
  const { status: answersStatus, data: answersData } =
    useFirestoreDocData(gameRef);

  const { status: currentQStatus, data: currentQData } =
    useFirestoreDocData(currentQRef);

  useEffect(() => {
    if (currentQStatus !== "success") return;
    setCurrentQ(String(currentQData.current));
  }, [currentQData, currentQStatus]);

  const openAnswer = async (ans: string, close?: boolean) => {
    await updateDoc(gameRef, {
      [ans]: close ? false : true,
    });
  };

  const reset = async () => {
    await updateDoc(gameRef, {
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
      a6: false,
      a7: false,
    });
  };

  return currentQStatus === "success" ? (
    <main className="flex min-h-screen flex-col gap-3 bg-[url('/BG_BLANK.jpg')] bg-cover bg-center bg-no-repeat px-5 py-10">
      <div className="grid w-full grid-cols-2 gap-2 rounded-lg bg-red-300/70 p-2">
        {Object.keys(staticData).map((s) => (
          <button
            onClick={async () => {
              await reset().then(() => updateCurrentQ(s));
            }}
            key={s}
            className="w-full rounded-lg bg-white py-2 text-center font-[Arial] text-2xl uppercase shadow-lg"
          >
            {s}
          </button>
        ))}
      </div>

      {answersStatus === "success" && (
        <div className="flex w-full flex-col gap-2 rounded-lg bg-green-300/70 p-2">
          {Object.entries(
            staticData[currentQData.current as Question].answers,
          ).map(([k, v]) => {
            return (
              <button
                onClick={async () =>
                  await openAnswer(k, answersData[k] as boolean)
                }
                key={v?.word}
                className={`w-full rounded-lg ${answersData[k] ? "bg-green-400" : "bg-red-400"} py-2 text-center font-[Arial] text-2xl uppercase shadow-lg`}
              >
                {v?.word}
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={() => reset()}
        className={`w-full rounded-lg bg-white py-2 text-center font-[Arial] text-2xl uppercase shadow-lg`}
      >
        Reset
      </button>
    </main>
  ) : null;
};

export default PanelPage;
