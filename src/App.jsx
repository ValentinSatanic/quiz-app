import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { quizData } from './data/quizData';
import './index.css'; // Для базовых стилей

// Контейнер, управляющий состоянием игры
const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  // 'idle', 'playing', 'finished'
  const [gameStatus, setGameStatus] = useState('idle'); 
  const navigate = useNavigate();

  // Начать игру
  const startGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameStatus('playing');
    navigate('/quiz');
  };

  // Обработка выбора ответа
  const handleAnswer = (selectedAnswer) => {
    // 1. Подсчет баллов
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    
    // 2. Переход к следующему вопросу
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < quizData.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      // 3. Завершение игры и переход к результатам
      setGameStatus('finished');
      navigate('/results');
    }
  };

  // Играть снова (сбрасывает состояние и начинает)
  const restartGame = () => {
    startGame();
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home startGame={startGame} />} />
        <Route 
          path="/quiz" 
          element={
            <Quiz 
              question={quizData[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={quizData.length}
              handleAnswer={handleAnswer}
            />
          } 
        />
        <Route 
          path="/results" 
          element={
            <Results 
              score={score}
              totalQuestions={quizData.length}
              restartGame={restartGame}
            />
          } 
        />
      </Routes>
    </div>
  );
};

// Главный компонент с Роутером
const App = () => (
    <Router>
        <QuizApp />
    </Router>
);

export default App;