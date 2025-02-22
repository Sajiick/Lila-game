// src/app/page.tsx
'use client';

import { useState } from 'react';
import Button from '@/components/ui/button';

// Данные о клетках (можно расширить)
const cells = [
  { id: 1, name: "Рождение", description: "Начало пути. Вы осознаете свою связь с миром.", practice: "Медитация на осознанность." },
  { id: 2, name: "Майя", description: "Иллюзия. Вы запутались в материальном.", practice: "Практика отпускания привязанностей." },
  // Добавьте остальные 70 клеток
];

// Змеи и лестницы (переходы) с индексной сигнатурой
const transitions: { [key: number]: number } = {
  4: 14, // Лестница
  9: 31, // Лестница
  17: 7, // Змея
  54: 34, // Змея
  // Добавьте остальные переходы
  
};

const HomePage = () => {
  const [dice, setDice] = useState(1);
  const [position, setPosition] = useState(1); // Начальная позиция 1
  const [gameOver, setGameOver] = useState(false);
  const totalCells = 72;

  const rollDice = () => {
    if (gameOver) return; // Если игра окончена, не даем бросать кубик

    const result = Math.floor(Math.random() * 6) + 1;
    setDice(result);
    movePlayer(result);
  };

  const movePlayer = (steps: number) => {
    setPosition((prev) => {
      let newPosition = prev + steps;

      // Проверяем, не превышает ли позиция максимальное значение
      if (newPosition > totalCells) {
        newPosition = totalCells;
      }

      // Проверяем переходы (змеи и лестницы)
      if (transitions[newPosition]) {
        newPosition = transitions[newPosition];
      }

      // Проверяем, достиг ли игрок конца игры
      if (newPosition === totalCells) {
        setGameOver(true);
      }

      return newPosition;
    });
  };

  // Получаем информацию о текущей клетке
  const currentCell = cells.find((cell) => cell.id === position) || {
    id: position,
    name: "Неизвестная клетка",
    description: "Описание отсутствует.",
    practice: "Практика отсутствует.",
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Лила: Трансформационная Игра</h1>
      
      {/* Кубик (только для отображения) */}
      <div
        className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-200 text-xl md:text-2xl rounded-full shadow-lg"
      >
        {dice}
      </div>

      {/* Информация о текущей позиции */}
      <p className="mt-4 text-sm md:text-base">Текущая позиция: {position}</p>
      
      {/* Информация о клетке */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold">{currentCell.name}</h2>
        <p className="mt-2 text-gray-600">{currentCell.description}</p>
        <div className="mt-4">
          <h3 className="text-md font-medium">Практика:</h3>
          <p className="text-gray-600">{currentCell.practice}</p>
        </div>
      </div>

      {/* Кнопка для броска кубика */}
      <Button
        variant="primary"
        size="md"
        onClick={rollDice}
        disabled={gameOver}
        className="mt-4"
        aria-label="Бросить кубик"
      >
        {gameOver ? 'Игра окончена' : 'Бросить кубик'}
      </Button>

      {/* Уведомление о завершении игры */}
      {gameOver && (
        <p className="mt-4 text-green-500 font-semibold">Поздравляем! Вы достигли конца пути.</p>
      )}
    </div>
  );
};

export default HomePage;