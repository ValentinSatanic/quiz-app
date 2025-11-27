import React from 'react';

// Этот компонент отвечает исключительно за отображение одного вопроса
// и обработку выбора ответа.
const Question = ({ questionData, handleSelection }) => {
  
  // Деструктуризация данных для удобства
  const { question, options } = questionData;

  return (
    <div className="question-content">
      
      {/* Текст вопроса */}
      <h2>{question}</h2>
      
      <div className="options-container">
        {/* Отображение вариантов ответа */}
        {options.map((option, index) => (
          <button
            key={index}
            className="btn option-btn"
            // При клике вызывается функция-колбэк из родителя (Quiz.jsx или App.jsx)
            onClick={() => handleSelection(option)} 
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;