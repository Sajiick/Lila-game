// src/app/layout.tsx
import type { Metadata } from 'next'; // Импортируем тип для метаданных
import './globals.css'; // Подключаем глобальные стили
import Link from 'next/link';

// Определяем метаданные для SEO и социальных сетей
export const metadata: Metadata = {
  title: 'Лила: Трансформационная Игра',
  description: 'Трансформационная игра Лила для самопознания и духовного роста.',
  authors: [{ name: 'Ваша команда' }],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Лила: Трансформационная Игра',
    description: 'Трансформационная игра Лила для самопознания и духовного роста.',
    url: 'https://your-site-url.com', // Замените на ваш URL
    siteName: 'Лила',
    images: [
      {
        url: '/og-image.jpg', // Замените на путь к OG-изображению
        width: 1200,
        height: 630,
        alt: 'Лила: Трансформационная Игра',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Лила: Трансформационная Игра',
    description: 'Трансформационная игра Лила для самопознания и духовного роста.',
    images: ['/og-image.jpg'], // Замените на путь к Twitter-изображению
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Получаем текущий год для footer
  const currentYear = new Date().getFullYear();

  return (
    <html lang="ru" dir="ltr" className="light"> {/* Поддержка темного режима */}
      
      <body className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="text-lg font-semibold">
              <Link href="/" className="hover:text-blue-500 transition">
                Лила
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/about" className="hover:text-blue-500 transition">
                О игре
              </Link>
              <Link href="/rules" className="hover:text-blue-500 transition">
                Правила
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="min-h-screen py-6 px-4">{children}</main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Лила. Все права защищены.
          </p>
        </footer>
      </body>
    </html>
  );
}