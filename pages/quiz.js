/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import BackgroundLogo from '../src/components/BackgroundLogo';
import BotaoJogar from '../src/components/BotaoJogar';
import QuizContainer from '../src/components/QuizContainer';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundLogo>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>
                Pergunta
                1
                de
                {`${db.questions.length}`}
              </h1>
            </Widget.Header>
            <img
              alt="Descrição"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
              src="https://placehold.it/400x400"
            />
            <Widget.Content>
              <h2>
                Titulo
              </h2>
              <p>
                Descrição
              </p>
              <BotaoJogar type="submit">
                Confirmar
              </BotaoJogar>
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
