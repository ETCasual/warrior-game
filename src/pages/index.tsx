/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Answer, qData, type Question } from "@/data";
import { doc } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

export default function Home() {
  const db = useFirestore();

  const staticData = qData;

  const [currentQ, setCurrentQ] = useState<Question>("q1");
  const currentWord = staticData[currentQ].word;
  const currentAnswers = staticData[currentQ].answers;
  const letters = staticData[currentQ].letters;

  const dbRef = doc(db, "game", currentQ);

  const currentQuestionFirebaseRef = doc(db, "game", "current");

  const { status: currentQFirebaseStatus, data: currentQFirebaseData } =
    useFirestoreDocData(currentQuestionFirebaseRef);
  const { status, data } = useFirestoreDocData(dbRef);

  useEffect(() => {
    if (currentQFirebaseStatus !== "success") return;
    setCurrentQ(currentQFirebaseData.current as Question);
  }, [currentQFirebaseData, currentQFirebaseStatus]);

  return (
    <>
      <Head>
        <title>Warrior Nation 2024</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/BG_BLANK.jpg')] bg-cover bg-center bg-no-repeat p-14">
        {status === "success" && (
          <div className="flex h-full w-full flex-grow flex-col items-center justify-between rounded-lg p-12">
            <div className="stack relative mt-10 w-full font-ocean text-xl text-white [--stacks:3]">
              <span className="absolute top-0 w-full text-center text-[170px] uppercase tracking-widest [--index:1]">
                {currentWord.split("").join(",")}
              </span>
              <span className="absolute top-0 w-full text-center text-[170px] uppercase tracking-widest [--index:2]">
                {currentWord.split("").join(",")}
              </span>
              <span className="absolute top-0 w-full text-center text-[170px] uppercase tracking-widest [--index:3]">
                {currentWord.split("").join(",")}
              </span>
            </div>

            <div
              className={`relative grid max-h-[350px] w-full flex-grow ${currentQ === "q6" ? "grid-cols-3 grid-rows-3" : "grid-cols-2 grid-rows-3"} gap-x-6 gap-y-4`}
            >
              <div className="absolute right-0 -translate-y-[115%] font-[Arial] text-xl text-white">
                ({letters}-letter words)
              </div>
              {Object.keys(currentAnswers).map((k) => {
                return (
                  <button
                    key={k}
                    className={`rounded-xl border-2 border-gray-500 bg-white/20 text-center font-ocean text-[75px] text-white`}
                  >
                    {/* @ts-expect-error  cant type it porperly yet*/}
                    {data[k] ? currentAnswers[k as Answer]?.word : null}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
