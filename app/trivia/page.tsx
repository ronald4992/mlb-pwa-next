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
  .trivia-page {
    min-height: 100vh;
    background: linear-gradient(
      135deg,
      #041c2c,
      #005c5c,
      #0a2a43
    );
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .trivia-container {
    width: 100%;
    max-width: 850px;
  }

  .title {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 30px;
    color: #c4ced4;
    text-shadow: 0 0 12px rgba(0, 92, 92, 0.5);
  }

  .question-info {
    text-align: center;
    color: #dbe4ea;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }

  .question-card {
    background: rgba(4, 28, 44, 0.95);
    padding: 40px;
    border-radius: 25px;
    border: 2px solid rgba(0, 92, 92, 0.4);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
  }

  .question-card h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 35px;
    color: white;
    line-height: 1.4;
  }

  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .option-btn {
    padding: 18px;
    border: none;
    border-radius: 14px;
    background: #0a2a43;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
    border: 1px solid rgba(196, 206, 212, 0.15);
  }

  .option-btn:hover {
    background: #005c5c;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 0 15px rgba(0, 92, 92, 0.5);
  }

  .correct {
    background: #008272 !important;
    color: white;
    box-shadow: 0 0 15px rgba(0, 130, 114, 0.6);
  }

  .wrong {
    background: #9b1c31 !important;
    color: white;
  }

  .score-box {
    text-align: center;
    margin-top: 25px;
    color: #c4ced4;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .result-card {
    background: rgba(4, 28, 44, 0.95);
    padding: 60px 40px;
    border-radius: 25px;
    text-align: center;
    color: white;
    border: 2px solid rgba(0, 92, 92, 0.4);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
  }

  .result-card h2 {
    font-size: 2.7rem;
    margin-bottom: 20px;
    color: #c4ced4;
  }

  .result-card p {
    font-size: 1.3rem;
    color: #dbe4ea;
    margin-bottom: 30px;
  }

  .restart-btn {
    padding: 15px 35px;
    border: none;
    border-radius: 14px;
    background: #005c5c;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
    font-weight: bold;
  }

  .restart-btn:hover {
    background: #008272;
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(0, 130, 114, 0.5);
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }

    .question-card {
      padding: 30px 20px;
    }

    .question-card h2 {
      font-size: 1.5rem;
    }

    .options-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
    </>
  );
}