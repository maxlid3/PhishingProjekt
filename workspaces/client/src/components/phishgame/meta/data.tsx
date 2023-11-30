interface Question {
  question: string;
  incorrectAnswers: string[];
  correctAnswer: string;
  imagePath: string;
}

export const data: Question[] = [
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: [
      "Ja, weil Gestaltung verdächtig",
      "Ja, weil Inhalt verdächtig",
      "Nein, weil Inhalt authentisch",
    ],
    correctAnswer: "Nein, weil Inhalt und Absender serös",
    imagePath: "path/to/your/image1.jpg",
  },
  {
    question:
      "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: [
      "Ja, weil Betreff verdächtig",
      "Ja, weil Betreff, Absender verdächtig",
      "Nein, weil Inhalt seriös",
    ],
    correctAnswer: "Ja, weil Betreff, Absender und Inhalt verdächtig",
    imagePath: "path/to/your/image2.jpg",
  },
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: ["Ja, weil Link verdächtig", "Ja, weil Gestaltung unstimmig", "Nein, weil Absender authentisch"],
    correctAnswer: "Nein, weil Absender und Links serös",
    imagePath: "path/to/your/image3.jpg",
  },
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: ["Ja, weil Gestaltung verdächtig", "Ja, weil Betreff verdächtig", "Nein, weil Absender authentisch"],
    correctAnswer: "Nein, weil Absender, Gestaltung und Inhalt seriös",
    imagePath: "path/to/your/image4.jpg",
  },
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: [
      "Ja, weil Absender verdächtig",
      "Ja, weil Absender und Gestaltung verdächtig",
      "Nein, weil Absender seriös",
    ],
    correctAnswer: "Ja, weil Absender, Inhalt und Gestaltung verdächtig",
    imagePath: "path/to/your/image5.jpg",
  },
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: [
      "Ja, weil Absender unseriös",
      "Nein, weil Absender seriös",
      "Nein, weil Inhalt seriös",
    ],
    correctAnswer: "Ja, weil Absender und Inhalt verdächtig",
    imagePath: "path/to/your/image6.jpg",
  },
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: ["Ja, weil Gestaltung verdächtig", "Nein, weil Absender seriös", "Nein, weil Absender und Gestaltung authentisch"],
    correctAnswer: "Ja, weil Inhalt verdächtig",
    imagePath: "path/to/your/image7.jpg",
  },
  {
    question: "Ist diese Mail eine Phishing Mail?",
    incorrectAnswers: [
      "Ja, weil Gestaltung verdächtig",
      "Nein, weil Inhalt authentisch",
      "Nein, weil Gestaltung seriös",
    ],
    correctAnswer: "Ja, weil Inhalt und Absender verdächtig",
    imagePath: "path/to/your/image8.jpg",
  },
];

export default data;
