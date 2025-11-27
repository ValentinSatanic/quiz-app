import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Не показываем шапку на странице квиза для максимальной концентрации
  // Или показываем ее, но без активных ссылок
  const isQuizPage = location.pathname === '/quiz';

  return (
    <header className={`app-header ${isQuizPage ? 'quiz-mode' : ''}`}>
      <Link to="/" className="logo">
        🧠 Мини-Квиз
      </Link>
      {/* Здесь можно было бы добавить статус, если бы он не был в App.jsx */}
    </header>
  );
};

export default Header;