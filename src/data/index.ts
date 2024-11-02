export const qData = {
  q1: {
    word: "race",
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
    word: "wash",
    answers: {
      a1: {
        opened: false,
        word: "ash",
      },
      a2: {
        opened: false,
        word: "has",
      },
      a3: {
        opened: false,
        word: "saw",
      },
      a4: {
        opened: false,
        word: "was",
      },
      //   a5: {
      //     opened: false,
      //     word: "era",
      //   },
      //   a6: {
      //     opened: false,
      //     word: "arc",
      //   },
    },
  },
};

export type Question = "q1";
export type Answer = "a1" | "a2" | "a3" | "a4" | "a5" | "a6";
