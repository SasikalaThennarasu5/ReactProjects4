// src/data/courses.js
export const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn React fundamentals with hands-on lessons.",
    lessons: [
      { id: 1, title: "Intro to React", videoUrl: "https://example.com/video1", completed: false },
      { id: 2, title: "JSX & Components", videoUrl: "https://example.com/video2", completed: false },
    ],
    quiz: [
      { question: "React is a ___?", options: ["library", "framework", "language"], answer: "library" }
    ]
  },
  // More courses...
];
