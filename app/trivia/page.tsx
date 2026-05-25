"use client";

import { useState } from "react";


const questions = [
  {
    question: "¿Qué equipo ha ganado más Series Mundiales?",
    options: ["Dodgers", "Yankees", "Red Sox", "Giants"],
    answer: "Yankees",
  },
  {
    question: "¿Cuántos strikes hacen un out?",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "¿Cuántos jugadores hay en el campo por equipo?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    question: "¿Qué significa un Home Run?",
    options: ["1 base", "2 carreras", "4 bases", "Fin del partido"],
    answer: "4 bases",
  },
  {
    question: "¿Cuántas bases hay en un campo de béisbol?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "¿Quién lanza la pelota en béisbol?",
    options: ["Catcher", "Pitcher", "Coach", "Runner"],
    answer: "Pitcher",
  },
  {
    question: "¿Qué significa MLB?",
    options: [
      "Major League Baseball",
      "Master League Baseball",
      "Modern League Baseball",
      "Mega League Baseball",
    ],
    answer: "Major League Baseball",
  },
  {
    question: "¿Cuántos innings tiene un partido profesional?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    question: "¿Qué usa el bateador para golpear la pelota?",
    options: ["Guante", "Bate", "Casco", "Zapato"],
    answer: "Bate",
  },
  {
    question: "¿Qué pasa después de 4 bolas?",
    options: [
      "Out",
      "Home Run",
      "Primera base",
      "Cambio de inning",
    ],
    answer: "Primera base",
  },
  {
    question: "¿Qué jugador recibe la pelota detrás del bateador?",
    options: ["Pitcher", "Catcher", "Outfielder", "Runner"],
    answer: "Catcher",
  },
  {
    question: "¿Qué color suele tener la pelota de béisbol?",
    options: ["Azul", "Roja", "Blanca", "Negra"],
    answer: "Blanca",
  },
  {
    question: "¿Qué jugador es famoso por lanzar y batear?",
    options: [
      "Mike Trout",
      "Shohei Ohtani",
      "Babe Ruth",
      "Derek Jeter",
    ],
    answer: "Shohei Ohtani",
  },
  {
    question: "¿Qué equipo juega en Nueva York?",
    options: ["Padres", "Astros", "Yankees", "Dodgers"],
    answer: "Yankees",
  },
  {
    question: "¿Qué significa hacer un strikeout?",
    options: [
      "Robar una base",
      "Eliminar al bateador",
      "Hacer un home run",
      "Atrapar la pelota",
    ],
    answer: "Eliminar al bateador",
  },
];

export default function TriviaPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    setSelected(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelected("");
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const restartTrivia = () => {
    setCurrentQuestion(0);
    setSelected("");
    setScore(0);
    setFinished(false);
  };

  return (
    <>
      <main className="trivia-page">
        <div className="trivia-container">
          <h1 className="title">⚾ Trivia de Béisbol</h1>

          {!finished ? (
            <>
              <div className="question-info">
                Pregunta {currentQuestion + 1} de {questions.length}
              </div>

              <div className="question-card">
                <h2>{questions[currentQuestion].question}</h2>

                <div className="options-grid">
                  {questions[currentQuestion].options.map((option) => {
                    const isCorrect =
                      option === questions[currentQuestion].answer;

                    const isSelected = option === selected;

                    return (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        disabled={selected !== ""}
                        className={`
                          option-btn
                          ${
                            selected
                              ? isCorrect
                                ? "correct"
                                : isSelected
                                ? "wrong"
                                : ""
                              : ""
                          }
                        `}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="score-box">
                Puntaje: {score}
              </div>
            </>
          ) : (
            <div className="result-card">
              <h2>🏆 ¡Trivia Terminada!</h2>

              <p>
                Obtuviste <strong>{score}</strong> de{" "}
                <strong>{questions.length}</strong> respuestas correctas
              </p>

              <button
                className="restart-btn"
                onClick={restartTrivia}
              >
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
  
      `}</style>
    </>
  );
}