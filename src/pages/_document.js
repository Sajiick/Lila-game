// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* Подключение шрифтов */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <style>
    {`
      @font-face {
        font-family: 'CustomFont';
        src: url('/fonts/custom-font.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
    `}
  </style>
          {/* Другие глобальные настройки */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;