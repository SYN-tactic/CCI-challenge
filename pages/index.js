import Head from 'next/head';
import React, { useState } from 'react';


export default function Home() {
  const [text, setText] = useState('Hello');
  return (
    <div className="container">
      <Head>
        <title>Austen Goodson CircleCI App</title>
      </Head>

      <div className="content">
        <h1>{text}</h1>
        <button onClick={()=> setText('Hi')}>Say Hi</button>
      </div>

      <footer>
        <a
          href="https://github.com/SYN-tactic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created By{' '} <strong>Austen Goodson</strong>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          background-color: #0e1111;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          color: #7F6Df2;
        }

        button {
          width: 16rem;
          height: 2rem;
          border-radius: 8px;
          background-color: #483699;
          border: none;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          letter-spacing: .06rem;

        }

        button:hover {
          cursor: pointer;
        }


        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #7F6Df2;
          text-decoration: none;
        }

        strong {
          font-weight: bold;
          text-decoration: underline;
        }

        .title a {
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
