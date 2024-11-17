type Maybe<T> = T | undefined;

type AnswerData = {
  opened: boolean;
  word: string;
};

export type QuestionDataType = Record<
  Question,
  {
    letters: number;
    word: string;
    answers: Record<Answer, Maybe<AnswerData>>;
  }
>;

export const qData = {
  q1: {
    letters: 3,
    word: "rcae",
    answers: {
      a1: {
        opened: false,
        word: "ace",
      },
      a2: {
        opened: false,
        word: "are",
      },
      a3: {
        opened: false,
        word: "car",
      },
      a4: {
        opened: false,
        word: "ear",
      },
      a5: {
        opened: false,
        word: "era",
      },
      a6: {
        opened: false,
        word: "arc",
      },
    },
  },

  q2: {
    letters: 3,
    word: "ohtpo",
    answers: {
      a1: {
        opened: false,
        word: "hot",
      },
      a2: {
        opened: false,
        word: "pot",
      },
      a3: {
        opened: false,
        word: "top",
      },
      a4: {
        opened: false,
        word: "hop",
      },
      a5: {
        opened: false,
        word: "too",
      },
    },
  },
  q3: {
    letters: 3,
    word: "knsit",
    answers: {
      a1: {
        opened: false,
        word: "kit",
      },
      a2: {
        opened: false,
        word: "kin",
      },
      a3: {
        opened: false,
        word: "sin",
      },
      a4: {
        opened: false,
        word: "tin",
      },
      a5: {
        opened: false,
        word: "sit",
      },
    },
  },
  q4: {
    letters: 3,
    word: "utlip",
    answers: {
      a1: {
        opened: false,
        word: "lip",
      },
      a2: {
        opened: false,
        word: "lit",
      },
      a3: {
        opened: false,
        word: "pit",
      },
      a4: {
        opened: false,
        word: "put",
      },
      a5: {
        opened: false,
        word: "tip",
      },
    },
  },
  q5: {
    letters: 3,
    word: "dobtu",
    answers: {
      a1: {
        opened: false,
        word: "bud",
      },
      a2: {
        opened: false,
        word: "but",
      },
      a3: {
        opened: false,
        word: "dot",
      },
      a4: {
        opened: false,
        word: "dub",
      },
      a5: {
        opened: false,
        word: "out",
      },
      a6: {
        opened: false,
        word: "tub",
      },
    },
  },
  q6: {
    letters: 3,
    word: "aptr",
    answers: {
      a1: {
        opened: false,
        word: "art",
      },
      a2: {
        opened: false,
        word: "par",
      },
      a3: {
        opened: false,
        word: "pat",
      },
      a4: {
        opened: false,
        word: "rat",
      },
      a5: {
        opened: false,
        word: "rap",
      },
      a6: {
        opened: false,
        word: "tap",
      },
      a7: {
        opened: false,
        word: "tar",
      },
    },
  },
  q7: {
    letters: 3,
    word: "down",
    answers: {
      a1: {
        opened: false,
        word: "don",
      },
      a2: {
        opened: false,
        word: "dow",
      },
      a3: {
        opened: false,
        word: "nod",
      },
      a4: {
        opened: false,
        word: "now",
      },
      a5: {
        opened: false,
        word: "own",
      },
      a6: {
        opened: false,
        word: "won",
      },
    },
  },
  q8: {
    letters: 3,
    word: "muidh",
    answers: {
      a1: {
        opened: false,
        word: "dim",
      },
      a2: {
        opened: false,
        word: "hid",
      },
      a3: {
        opened: false,
        word: "him",
      },
      a4: {
        opened: false,
        word: "hum",
      },
      a5: {
        opened: false,
        word: "mid",
      },
      a6: {
        opened: false,
        word: "mud",
      },
    },
  },
  q9: {
    letters: 4,
    word: "neam",
    answers: {
      a1: {
        opened: false,
        word: "mean",
      },
      a2: {
        opened: false,
        word: "name",
      },
      a3: {
        opened: false,
        word: "amen",
      },
      a4: {
        opened: false,
        word: "mane",
      },
    },
  },
};

export type Question =
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "q6"
  | "q7"
  | "q8"
  | "q9";
export type Answer = "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7";
