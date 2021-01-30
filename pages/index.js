/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import BackgroundLogo from '../src/components/BackgroundLogo';
import Input from '../src/components/InputInicial';
import BotaoJogar from '../src/components/BotaoJogar';
import QuizContainer from '../src/components/QuizContainer';
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundLogo>
        <Head>
          <title>Quiz Comdinheiro</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('submit por meio do react');
                // router manda para a prox pagina
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Digite seu nome"
                  value={name}
                />
                <BotaoJogar type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </BotaoJogar>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes sobre mercado financeiro</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </BackgroundLogo>
      <GitHubCorner projectUrl="https://github.com/MarianaSK" />
    </QuizBackground>
  );
}
