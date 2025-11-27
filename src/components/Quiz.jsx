import React from 'react';
import Question from './Question'; // Импортируем новый компонент

const Quiz = ({ question, questionNumber, totalQuestions, handleAnswer }) => {
  if (!question) {
    return <div className="loading">Загрузка вопроса...</div>;
  }

  return (
    <div className="page quiz-page">
      {/* Интерфейс: Вопрос X из Y */}
      <div className="question-info">
        Вопрос {questionNumber} из {totalQuestions}
      </div>
      
      {/* Используем компонент Question для отображения содержимого */}
      <Question 
        questionData={question}
        handleSelection={handleAnswer} // Передаем функцию обработки ответа
      />
      
    </div>
  );
};

export default Quiz;