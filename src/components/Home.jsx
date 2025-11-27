import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ startGame }) => {
  return (
    <div className="page home-page">
      <h1> Мини-квиз по JS & React</h1>
      <p className="description">
        Проверьте свои знания в JavaScript и современном веб-разработке. 
        Вас ждут 5 вопросов. Удачи!
      </p>
      {/* Кнопка "Начать игру" (вызывает функцию startGame) */}
      <button className="btn primary" onClick={startGame}>
        Начать игру
      </button>
      {/* <div className="animation-placeholder">Небольшие анимации (JS/CSS)</div> */}
    </div>
  );
};

export default Home;