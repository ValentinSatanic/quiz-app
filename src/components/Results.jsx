import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ score, totalQuestions, restartGame }) => {
  
  // Сообщение в зависимости от результата
  let message;
  const percentage = (score / totalQuestions) * 100;

  if (percentage === 100) {
    message = "Потрясающий результат! Вы эксперт!";
  } else if (percentage >= 60) {
    message = "Отличный результат! Хорошая работа!";
  } else {
    message = "Неплохо, но есть что улучшить! Попробуйте еще раз.";
  }

  return (
    <div className="page results-page">
      <h1>Ваш результат</h1>
      
      {/* Вывод полученных баллов */}
      <div className="final-score">
        {score} / {totalQuestions}
      </div>
      
      {/* Сообщение */}
      <p className="result-message">
        {message}
      </p>
      
      <div className="results-actions">
        {/* Кнопка "Играть снова" (перезапускает игру) */}
        <button 
          className="btn primary" 
          onClick={restartGame}
        >
          Играть снова
        </button>
        
        {/* Кнопка "На главную" (переход без сброса состояния) */}
        <Link to="/" className="btn secondary">
          На главную
        </Link>
      </div>
    </div>
  );
};

export default Results;