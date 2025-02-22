// src/app/page.tsx
'use client';

import { useState } from 'react';
import Button from '@/components/ui/button';

// Данные о клетках (можно расширить)
const cells = [
  { id: 1, name: "Рождение", description: "Начало пути. Вы осознаете свою связь с миром.", practice: "Медитация на осознанность." },
  { id: 2, name: "Майя", description: "Иллюзия. Вы запутались в материальном.", practice: "Практика отпускания привязанностей." },
  { id: 3, name: "Гнев", description: "Эмоция, которая разрушает внутренний мир.", practice: "Дыхательная медитация для успокоения." },
  { id: 4, name: "Жадность", description: "Желание обладать больше, чем нужно.", practice: "Практика благодарности за то, что уже есть." },
  { id: 5, name: "Физический план", description: "Ваше тело — храм души.", practice: "Йога или физические упражнения для гармонии." },
  { id: 6, name: "Иллюзия", description: "Вы видите только то, что хотите видеть.", practice: "Медитация на ясность восприятия." },
  { id: 7, name: "Зависть", description: "Сравнение с другими разрушает вашу уникальность.", practice: "Практика принятия себя." },
  { id: 8, name: "Интеллект", description: "Разум — инструмент, но не хозяин.", practice: "Медитация на осознанное мышление." },
  { id: 9, name: "Гордость", description: "Эго мешает видеть истину.", practice: "Практика смирения и служения." },
  { id: 10, name: "План астральный", description: "Ваша энергия связана с тонкими мирами.", practice: "Энергетическая медитация." },
  { id: 11, name: "Фантазия", description: "Мечты вдохновляют, но могут увести от реальности.", practice: "Практика заземления." },
  { id: 12, name: "Карма", description: "Ваши действия определяют будущее.", practice: "Осознанный анализ прошлых поступков." },
  { id: 13, name: "Милосердие", description: "Сострадание открывает сердце.", practice: "Практика доброты к другим." },
  { id: 14, name: "План гармонии", description: "Баланс между телом, умом и душой.", practice: "Медитация на равновесие." },
  { id: 15, name: "Реальность", description: "Истина скрыта за иллюзиями.", practice: "Практика осознанного присутствия." },
  { id: 16, name: "Блаженство", description: "Состояние внутреннего покоя.", practice: "Медитация на внутреннюю тишину." },
  { id: 17, name: "Энергия", description: "Ваша жизненная сила требует баланса.", practice: "Практика управления энергией." },
  { id: 18, name: "План духовности", description: "Связь с высшим Я.", practice: "Медитация на связь с душой." },
  { id: 19, name: "Негативность", description: "Темные мысли мешают росту.", practice: "Практика трансформации негативных мыслей." },
  { id: 20, name: "Сострадание", description: "Любовь к другим исцеляет.", practice: "Практика отправки любви окружающим." },
  { id: 21, name: "Эгоизм", description: "Фокус на себе разрушает связи.", practice: "Практика служения другим." },
  { id: 22, name: "Знание", description: "Мудрость начинается с понимания.", practice: "Чтение духовной литературы." },
  { id: 23, name: "Медитация", description: "Путь к внутреннему миру.", practice: "Ежедневная медитация." },
  { id: 24, name: "План реальности", description: "Осознание текущего момента.", practice: "Практика осознанности." },
  { id: 25, name: "Самоосознание", description: "Понимание своего истинного Я.", practice: "Медитация на самоисследование." },
  { id: 26, name: "Служение", description: "Бескорыстная помощь другим.", practice: "Практика волонтерства." },
  { id: 27, name: "Духовность", description: "Связь с высшими силами.", practice: "Молитва или медитация." },
  { id: 28, name: "Истина", description: "Поиск правды внутри себя.", practice: "Практика честности с собой." },
  { id: 29, name: "План гармонии", description: "Баланс во всех аспектах жизни.", practice: "Медитация на равновесие." },
  { id: 30, name: "Сознание", description: "Осознание себя как части целого.", practice: "Медитация на единство." },
  { id: 31, name: "План блаженства", description: "Состояние внутреннего счастья.", practice: "Практика благодарности." },
  { id: 32, name: "Любовь", description: "Безусловная любовь ко всему сущему.", practice: "Практика отправки любви." },
  { id: 33, name: "План духовного знания", description: "Мудрость, ведущая к освобождению.", practice: "Изучение духовных текстов." },
  { id: 34, name: "Освобождение", description: "Свобода от привязанностей.", practice: "Практика отпускания." },
  { id: 35, name: "План реальности", description: "Осознание истины.", practice: "Практика осознанного присутствия." },
  { id: 36, name: "План блаженства", description: "Состояние внутреннего покоя.", practice: "Медитация на тишину." },
  { id: 37, name: "План духовности", description: "Связь с высшим Я.", practice: "Медитация на душу." },
  { id: 38, name: "План гармонии", description: "Баланс между телом и душой.", practice: "Медитация на равновесие." },
  { id: 39, name: "План сознания", description: "Осознание единства.", practice: "Медитация на единство." },
  { id: 40, name: "План любви", description: "Безусловная любовь.", practice: "Практика любви к себе и другим." },
  { id: 41, name: "План знания", description: "Мудрость, ведущая к истине.", practice: "Чтение духовной литературы." },
  { id: 42, name: "План освобождения", description: "Свобода от иллюзий.", practice: "Практика отпускания." },
  { id: 43, name: "План реальности", description: "Осознание текущего момента.", practice: "Практика осознанности." },
  { id: 44, name: "План блаженства", description: "Состояние внутреннего счастья.", practice: "Практика благодарности." },
  { id: 45, name: "План духовности", description: "Связь с высшими силами.", practice: "Молитва или медитация." },
  { id: 46, name: "План гармонии", description: "Баланс между умом и сердцем.", practice: "Медитация на внутреннюю гармонию." },
  { id: 47, name: "План сознания", description: "Осознание себя как части вселенной.", practice: "Медитация на единство с миром." },
  { id: 48, name: "План любви", description: "Безусловная любовь ко всему сущему.", practice: "Практика отправки любви окружающим." },
  { id: 49, name: "План знания", description: "Мудрость, ведущая к освобождению.", practice: "Изучение духовных текстов." },
  { id: 50, name: "План освобождения", description: "Свобода от всех привязанностей.", practice: "Практика отпускания." },
  { id: 51, name: "План реальности", description: "Осознание истины текущего момента.", practice: "Практика осознанного присутствия." },
  { id: 52, name: "План блаженства", description: "Состояние внутреннего покоя и радости.", practice: "Практика благодарности за жизнь." },
  { id: 53, name: "План духовности", description: "Связь с высшим Я и вселенной.", practice: "Медитация на связь с душой." },
  { id: 54, name: "План гармонии", description: "Баланс между телом, умом и душой.", practice: "Медитация на равновесие." },
  { id: 55, name: "План сознания", description: "Осознание единства со всем сущим.", practice: "Медитация на единство." },
  { id: 56, name: "План любви", description: "Безусловная любовь к себе и другим.", practice: "Практика любви и принятия." },
  { id: 57, name: "План знания", description: "Мудрость, открывающая путь к истине.", practice: "Чтение духовной литературы." },
  { id: 58, name: "План освобождения", description: "Свобода от иллюзий и эго.", practice: "Практика отпускания привязанностей." },
  { id: 59, name: "План реальности", description: "Осознание текущего момента как истины.", practice: "Практика осознанности." },
  { id: 60, name: "План блаженства", description: "Состояние внутреннего счастья.", practice: "Практика благодарности за все." },
  { id: 61, name: "План духовности", description: "Связь с высшими силами и душой.", practice: "Молитва или медитация." },
  { id: 62, name: "План гармонии", description: "Баланс во всех аспектах жизни.", practice: "Медитация на внутреннюю гармонию." },
  { id: 63, name: "План сознания", description: "Осознание себя как части целого.", practice: "Медитация на единство с миром." },
  { id: 64, name: "План любви", description: "Безусловная любовь ко всему сущему.", practice: "Практика отправки любви." },
  { id: 65, name: "План знания", description: "Мудрость, ведущая к освобождению.", practice: "Изучение духовных текстов." },
  { id: 66, name: "План освобождения", description: "Свобода от всех иллюзий.", practice: "Практика отпускания." },
  { id: 67, name: "План реальности", description: "Осознание истины текущего момента.", practice: "Практика осознанного присутствия." },
  { id: 68, name: "План блаженства", description: "Состояние внутреннего покоя и радости.", practice: "Практика благодарности за жизнь." },
  { id: 69, name: "План духовности", description: "Связь с высшим Я и вселенной.", practice: "Медитация на связь с душой." },
  { id: 70, name: "План гармонии", description: "Баланс между телом, умом и душой.", practice: "Медитация на равновесие." },
  { id: 71, name: "План сознания", description: "Осознание единства со всем сущим.", practice: "Медитация на единство." },
  { id: 72, name: "Космическое сознание", description: "Полное единство с вселенной.", practice: "Медитация на космическое единство." },

];


// Змеи и стрелы (переходы) с индексной сигнатурой
const transitions: { [key: number]: number } = {
  // стрелы(перемещение вверх)
  10: 23,   // Стрела: с 4 на 14
  17: 69,   // Стрела: с 9 на 31
  20: 32,  // Стрела: с 21 на 42
  22: 60,  // Лестница: с 28 на 84 
  27: 41,  // Лестница: с 36 на 44
  28: 50,  // Лестница: с 51 на 67
  37: 66,  // Лестница: с 71 на 91 
  46: 62,  // Лестница: с 80 на 100 
  54: 68,

  // Змеи (перемещение вниз)
  12: 8,   // Змея: с 17 на 7
  24: 7,  // Змея: с 54 на 34
  29: 6,  // Змея: с 62 на 19
  44: 9,  // Змея: с 64 на 60
  52: 35,  // Змея: с 87 на 24 
  55: 3,  // Змея: с 93 на 73 
  61: 13,  // Змея: с 95 на 75 
  63: 2,  // Змея: с 98 на 79 
  72: 51,

};
export default function Home() {
// Состояние для игры: начальная позиция на клетке 68, ожидание "Рождения" (выброс 6)
const [currentPosition, setCurrentPosition] = useState(68); // Начальная позиция на клетке 68
const [diceValue, setDiceValue] = useState(0);
const [currentCell, setCurrentCell] = useState(cells.find((cell) => cell.id === 68) || cells[0]);
const [moveHistory, setMoveHistory] = useState<{ cellId: number; cellName: string }[]>([]);
const [gameOver, setGameOver] = useState(false);
const [isBorn, setIsBorn] = useState(false); // Флаг "Рождения" (игрок еще не родился)
const [birthAttempts, setBirthAttempts] = useState(0); // Количество попыток выбросить 6
const [request, setRequest] = useState(""); // Запрос игрока (можно добавить поле ввода)
// Состояние для анимации кубика
const [isRolling, setIsRolling] = useState(false); // Флаг анимации

// Функция броска кубика с анимацией
const rollDice = () => {
  if (gameOver) return;

  // Запускаем анимацию кубика
  setIsRolling(true);

  // Имитация задержки для анимации (например, 1 секунда)
  setTimeout(() => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setDiceValue(dice);

    // Если игрок еще не родился (на клетке 68), нужно выбросить 6
    if (!isBorn) {
      setBirthAttempts(birthAttempts + 1);
      if (dice !== 6) {
        // Не выбросили 6, остаемся на клетке 68
        setMoveHistory([...moveHistory, { cellId: 68, cellName: "Космическое сознание (ожидание рождения)" }]);
        setIsRolling(false); // Останавливаем анимацию
        return;
      }
      // Выбросили 6, "Рождение" произошло, перемещаемся на клетку 1, затем на 6
      setIsBorn(true);
      setCurrentPosition(1);
      const birthCell = cells.find((cell) => cell.id === 1) || cells[0];
      setCurrentCell(birthCell);
      setMoveHistory([...moveHistory, { cellId: 1, cellName: birthCell.name }]);
      // Сразу перемещаемся на клетку 6 (Иллюзия)
      setTimeout(() => {
        setCurrentPosition(6);
        const illusionCell = cells.find((cell) => cell.id === 6) || cells[0];
        setCurrentCell(illusionCell);
        setMoveHistory((prev) => [...prev, { cellId: 6, cellName: illusionCell.name }]);
        setIsRolling(false); // Останавливаем анимацию после перехода
      }, 500);
      return;
    }

    // Игрок уже родился, обычный ход
    let newPosition = currentPosition + dice;
    // Проверяем, не превышает ли позиция 72
    if (newPosition > 72) {
      // Если выпало больше, чем нужно для достижения 68, игрок остается на месте
      if (currentPosition < 68 && newPosition > 68) {
        newPosition = currentPosition; // Остаемся на месте, если пропустили 68
      } else if (newPosition > 72) {
        newPosition = currentPosition; // Остаемся на месте, если больше 72
      }
    }

    // Проверяем переходы (змеи и стрелы)
    if (transitions[newPosition]) {
      newPosition = transitions[newPosition];
    }

    setCurrentPosition(newPosition);
    const newCell = cells.find((cell) => cell.id === newPosition) || cells[0];
    setCurrentCell(newCell);
    setMoveHistory([...moveHistory, { cellId: newCell.id, cellName: newCell.name }]);

    // Проверяем завершение игры
    if (newPosition === 68) {
      setGameOver(true);
    }

    setIsRolling(false); // Останавливаем анимацию после хода
  }, 1000); // Задержка 1 секунда для анимации
};

// Стили для сетки 9x8 (9 столбцов, 8 рядов), размер клеток 100x100px
// Стили для сетки 9x8 (9 столбцов, 8 рядов), размер клеток 100x100px
const boardStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 100px)', // 9 столбцов по 100px
  gridTemplateRows: 'repeat(8, 100px)', // 8 рядов по 100px
  gap: '5px',
  justifyContent: 'center',
  margin: '20px auto',
  minWidth: '920px', // 9 * 100px + отступы
  minHeight: '820px', // 8 * 100px + отступы
  backgroundImage: 'url("/images/background.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  gridAutoFlow: 'row dense', // Заполнение строк снизу вверх
};

  // Стили для клеток размером 100x100px
const cellStyles: React.CSSProperties = {
  width: '100px',
  height: '100px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: '1px solid #999',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '28px', // Увеличиваем шрифт для читаемости
  cursor: 'pointer',
  position: 'relative', // Для позиционирования иконок
};
  return (
    // Поле для ввода запроса игрока перед началом игры
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  {!isBorn && (
    <div className="mb-4">
      <label htmlFor="request" className="block text-lg font-semibold mb-2">
        Введите ваш запрос для игры:
      </label>
      <input
        id="request"
        type="text"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        className="border p-2 rounded w-64"
        placeholder="Ваш запрос..."
      />
    </div>
  )}
      <h1 className="text-4xl font-bold mb-8">Игра Лила</h1>
      // Рендеринг сетки 8x9 (72 клетки) с иконками, подсветкой текущей позиции и особыми клетками
      // Рендеринг сетки 9x8 (72 клетки) с чередованием направления рядов
<div style={boardStyles}>
  {[...Array(8)].map((_, rowIndex) => ( // 8 рядов
    <div key={rowIndex} style={{ display: 'contents' }}>
      {cells
        .slice(rowIndex * 9, (rowIndex + 1) * 9) // По 9 клеток в ряду
        .map((cell, cellIndex) => {
          const isPlayerHere = currentPosition === cell.id;
          const isSnake = transitions[cell.id] && transitions[cell.id] < cell.id;
          const isLadder = transitions[cell.id] && transitions[cell.id] > cell.id;
          const isSpecialCell = [1, 68, 72].includes(cell.id); // "Рождение" (1), "Космическое сознание" (68), "Земля" (72)

          // Чередование направления: четные ряды (0, 2, 4, 6) слева направо, нечетные (1, 3, 5, 7) справа налево
          const isEvenRow = rowIndex % 2 === 0;
          const cellOrder = isEvenRow ? cellIndex : 8 - cellIndex; // Инвертируем порядок для нечетных рядов

          return (
            <div
              key={cell.id}
              style={{
                ...cellStyles,
                backgroundColor: currentPosition === cell.id ? '#ffd700' : 'rgba(255, 255, 255, 0.8)',
                gridColumn: cellOrder + 1, // Устанавливаем позицию в столбце
              }}
              className={`cell ${isPlayerHere ? 'player' : ''} ${isSnake ? 'snake' : ''} ${isLadder ? 'ladder' : ''} ${isSpecialCell ? 'special' : ''}`}
            >
              <span className="cell-number">{cell.id}</span>
              {isPlayerHere && (
                <img src="/images/player.png" alt="Player" className="cell-icon player-icon" style={{ width: '40px', height: '40px' }} />
              )}
              {isSnake && (
                <img src="/images/snake.png" alt="Snake" className="cell-icon snake-icon" style={{ width: '40px', height: '40px' }} />
              )}
              {isLadder && (
                <img src="/images/ladder.png" alt="Ladder" className="cell-icon ladder-icon" style={{ width: '40px', height: '40px' }} />
              )}
              {isSpecialCell && cell.id === 1 && (
                <img src="/images/birth.png" alt="Birth" className="cell-icon special-icon" style={{ width: '40px', height: '40px' }} />
              )}
              {isSpecialCell && cell.id === 68 && (
                <img src="/images/cosmic.png" alt="Cosmic" className="cell-icon special-icon" style={{ width: '40px', height: '40px' }} />
              )}
              {isSpecialCell && cell.id === 72 && (
                <img src="/images/earth.png" alt="Earth" className="cell-icon special-icon" style={{ width: '40px', height: '40px' }} />
              )}
            </div>
          );
        })}
    </div>
  )).reverse()} {/* Инвертируем порядок рядов для отображения снизу вверх */}
</div>
      <div className="mt-8 text-center">
        <p className="text-lg">Текущая клетка: {currentCell.name}</p>
        <p className="text-md">{currentCell.description}</p>
        <p className="text-md">Практика: {currentCell.practice}</p>
      </div>
      // Рендеринг кнопки и кубика с анимацией
      <div className="mt-4 flex flex-col items-center">
  <div
    className={`dice ${isRolling ? 'rolling' : ''}`}
    onClick={rollDice}
    style={{
      cursor: gameOver ? 'not-allowed' : 'pointer',
      width: '100px',
      height: '100px',
      backgroundImage: `url("/images/dice/dice-${diceValue || 1}.png")`, // Изображение грани кубика
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 0.1s ease-in-out', // Плавный переход для анимации
    }}
    title={gameOver ? "Игра окончена" : "Бросить кубик"}
  />
  {diceValue > 0 && !isRolling && <p className="mt-2 text-lg">Выпало: {diceValue}</p>}
  {gameOver && (
    <p className="mt-4 text-green-500 font-semibold">Поздравляем! Вы достигли конца пути.</p>
  )}
</div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">История ходов</h2>
        <ul className="list-disc">
          {moveHistory.map((move, index) => (
            <li key={index}>
              Ход {index + 1}: Клетка {move.cellId} - {move.cellName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}