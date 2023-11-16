interface Question {
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
  }  
export const shuffleAnswers = (question: Question) => {
    if (!question) {
      return [];
    }
    const unshuffledAnswers = [
      question.correctAnswer,
      ...question.incorrectAnswers,
    ];
    return unshuffledAnswers
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };
  