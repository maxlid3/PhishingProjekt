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
      "Nein",
      "Nö",
      "Nee",
    ],
    correctAnswer: "Ja, na klar.",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    incorrectAnswers: [
      "In the <body> section",
      "At the end of the document",
      "You can't refer to an external style sheet",
    ],
    correctAnswer: "In the <head> section",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "Which is the correct CSS syntax?",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    incorrectAnswers: [
      "' this is a comment",
      "// this is a comment",
      "// this is a comment //",
    ],
    correctAnswer: "/* this is a comment */",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "Which property is used to change the background color?",
    incorrectAnswers: ["color", "bgcolor", "bgColor"],
    correctAnswer: "background-color",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
    imagePath: "path/to/your/image.jpg",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
    imagePath: "path/to/your/image.jpg",
  },
];

export default data;
