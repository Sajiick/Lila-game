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
  { id: 73, name: "План истины", description: "Осознание абсолютной истины.", practice: "Практика честности с собой и миром." },
  { id: 74, name: "План освобождения", description: "Свобода от всех ограничений.", practice: "Практика отпускания всех привязанностей." },
  { id: 75, name: "План реальности", description: "Осознание текущего момента как единственной истины.", practice: "Практика осознанности." },
  { id: 76, name: "План блаженства", description: "Состояние внутреннего счастья и покоя.", practice: "Практика благодарности за каждый момент." },
  { id: 77, name: "План духовности", description: "Связь с высшими силами и вселенной.", practice: "Молитва или медитация на связь с душой." },
  { id: 78, name: "План гармонии", description: "Баланс между всеми аспектами бытия.", practice: "Медитация на внутреннюю гармонию." },
  { id: 79, name: "План сознания", description: "Осознание себя как части вселенной.", practice: "Медитация на единство с миром." },
  { id: 80, name: "План любви", description: "Безусловная любовь ко всему сущему.", practice: "Практика отправки любви всем существам." },
  { id: 81, name: "План знания", description: "Мудрость, ведущая к абсолютной истине.", practice: "Изучение духовных текстов." },
  { id: 82, name: "План освобождения", description: "Свобода от всех иллюзий и ограничений.", practice: "Практика отпускания." },
  { id: 83, name: "План реальности", description: "Осознание истины текущего момента.", practice: "Практика осознанного присутствия." },
  { id: 84, name: "План блаженства", description: "Состояние внутреннего покоя и радости.", practice: "Практика благодарности за жизнь." },
  { id: 85, name: "План духовности", description: "Связь с высшим Я и вселенной.", practice: "Медитация на связь с душой." },
  { id: 86, name: "План гармонии", description: "Баланс между телом, умом и душой.", practice: "Медитация на равновесие." },
  { id: 87, name: "План сознания", description: "Осознание единства со всем сущим.", practice: "Медитация на единство." },
  { id: 88, name: "План любви", description: "Безусловная любовь к себе и другим.", practice: "Практика любви и принятия." },
  { id: 89, name: "План знания", description: "Мудрость, открывающая путь к истине.", practice: "Чтение духовной литературы." },
  { id: 90, name: "План освобождения", description: "Свобода от иллюзий и эго.", practice: "Практика отпускания привязанностей." },
  { id: 91, name: "План реальности", description: "Осознание текущего момента как истины.", practice: "Практика осознанности." },
  { id: 92, name: "План блаженства", description: "Состояние внутреннего счастья.", practice: "Практика благодарности за все." },
  { id: 93, name: "План духовности", description: "Связь с высшими силами и душой.", practice: "Молитва или медитация." },
  { id: 94, name: "План гармонии", description: "Баланс во всех аспектах жизни.", practice: "Медитация на внутреннюю гармонию." },
  { id: 95, name: "План сознания", description: "Осознание себя как части целого.", practice: "Медитация на единство с миром." },
  { id: 96, name: "План любви", description: "Безусловная любовь ко всему сущему.", practice: "Практика отправки любви всем существам." },
  { id: 97, name: "План знания", description: "Мудрость, ведущая к абсолютной истине.", practice: "Изучение духовных текстов." },
  { id: 98, name: "План освобождения", description: "Свобода от всех иллюзий и ограничений.", practice: "Практика отпускания." },
  { id: 99, name: "План реальности", description: "Осознание истины текущего момента.", practice: "Практика осознанного присутствия." },
  { id: 100, name: "Космическое сознание", description: "Полное единство с вселенной и высшим Я.", practice: "Медитация на космическое единство." },
];


// Змеи и лестницы (переходы) с индексной сигнатурой
const transitions: { [key: number]: number } = {
  // Лестницы (перемещение вверх)
  4: 14,   // Лестница: с 4 на 14
  9: 31,   // Лестница: с 9 на 31
  21: 42,  // Лестница: с 21 на 42
  28: 84,  // Лестница: с 28 на 84 
  36: 44,  // Лестница: с 36 на 44
  51: 67,  // Лестница: с 51 на 67
  71: 91,  // Лестница: с 71 на 91 
  80: 100,  // Лестница: с 80 на 100 

  // Змеи (перемещение вниз)
  17: 7,   // Змея: с 17 на 7
  54: 34,  // Змея: с 54 на 34
  62: 19,  // Змея: с 62 на 19
  64: 60,  // Змея: с 64 на 60
  87: 24,  // Змея: с 87 на 24 
  93: 73,  // Змея: с 93 на 73 
  95: 75,  // Змея: с 95 на 75 
  98: 79,  // Змея: с 98 на 79 

};
export default function Home() {
  const [currentPosition, setCurrentPosition] = useState(1); // Начальная позиция игрока (клетка 1)
  const [diceValue, setDiceValue] = useState(0);
  const [currentCell, setCurrentCell] = useState(cells[0]);
  const [moveHistory, setMoveHistory] = useState<{ cellId: number; cellName: string }[]>([]);
  

  const HomePage = () => {
    const [dice, setDice] = useState(1);
    const [position, setPosition] = useState(1); // Начальная позиция 1
    const [gameOver, setGameOver] = useState(false);
    const totalCells = 100;


    const rollDice = () => {
      if (gameOver) return; // Если игра окончена, не даем бросать кубик

      const dice = Math.floor(Math.random() * 6) + 1;
      setDiceValue(dice);
      const newPosition = Math.min(currentPosition + dice, cells.length);
      setCurrentPosition(newPosition); // Обновляем текущую позицию
      const newCell = cells.find((cell) => cell.id === newPosition) || cells[0];
      setCurrentCell(newCell);
      setMoveHistory([...moveHistory, { cellId: newCell.id, cellName: newCell.name }]);
      // Проверяем, достиг ли игрок последней клетки
    if (newPosition === cells.length) {
      setGameOver(true); // Устанавливаем gameOver в true
    }
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
    const renderGameBoard = () => {
      const board = [];
      for (let row = 9; row >= 0; row--) {
        const rowCells = [];
        for (let col = 0; col < 10; col++) {
          const cellNumber = row % 2 === 0
            ? (row * 10) + col + 1
            : (row * 10) + (10 - col);
          const isPlayerHere = position === cellNumber;
          const isSnake = Object.keys(transitions).includes(cellNumber.toString()) && transitions[cellNumber] < cellNumber;
          const isLadder = Object.keys(transitions).includes(cellNumber.toString()) && transitions[cellNumber] > cellNumber;
          const isSpecialCell = [1, 100].includes(cellNumber); // Пример особых клеток (Рождение и Космическое сознание)

          rowCells.push(
            <div
              key={cellNumber}
              className={`cell ${isPlayerHere ? 'player' : ''} ${isSnake ? 'snake' : ''} ${isLadder ? 'ladder' : ''} ${isSpecialCell ? 'special' : ''}`}
            >
              <span className="cell-number">{cellNumber}</span>
              {isPlayerHere && (
                <img src="/images/player.png" alt="Player" className="cell-icon player-icon" />
              )}
              {isSnake && (
                <img src="/images/snake.png" alt="Snake" className="cell-icon snake-icon" />
              )}
              {isLadder && (
                <img src="/images/ladder.png" alt="Ladder" className="cell-icon ladder-icon" />
              )}
              {isSpecialCell && cellNumber === 1 && (
                <img src="/images/birth.png" alt="Birth" className="cell-icon special-icon" />
              )}
              {isSpecialCell && cellNumber === 100 && (
                <img src="/images/cosmic.png" alt="Cosmic" className="cell-icon special-icon" />
              )}
            </div>
          );
        }
        board.push(
          <div key={row} className="row">
            {row % 2 === 0 ? rowCells : rowCells.reverse()}
          </div>
        );
      }
      return <div className="game-board">{board}</div>;
    };

    const boardStyles: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 50px)',
      gap: '5px',
      justifyContent: 'center',
      margin: '20px auto',
      minWidth: '420px',
      minHeight: '420px',
      backgroundImage: 'url("/images/background.jpg")', // Ваш фон
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };

    const cellStyles: React.CSSProperties = {
      width: '50px',
      height: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Полупрозрачный фон для читаемости
      border: '1px solid #999',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '14px',
      cursor: 'pointer',
    };

    return (
      <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Лила: Трансформационная Игра</h1>

        {/* Игровое поле */}
        {renderGameBoard()}

        <div
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-200 text-xl md:text-2xl rounded-full shadow-lg mt-4"
        >
          {dice}
        </div>

        <p className="mt-4 text-sm md:text-base">Текущая позиция: {position}</p>

        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{currentCell.name}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{currentCell.description}</p>
          <div className="mt-4">
            <h3 className="text-md font-medium text-gray-900 dark:text-gray-100">Практика:</h3>
            <p className="text-gray-600 dark:text-gray-400">{currentCell.practice}</p>
          </div>
        </div>

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