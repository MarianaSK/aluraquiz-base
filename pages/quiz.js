/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import LoadingWidget from '../src/components/Loading';
import GitHubCorner from '../src/components/GitHubCorner';
import BackgroundLogo from '../src/components/BackgroundLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/containers/QuestionWidget';

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundLogo>
        <QuizContainer>
          <QuizLogo />
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
          />
          <LoadingWidget />
        </QuizContainer>
      </BackgroundLogo>
      <GitHubCorner projectUrl="https://github.com/MarianaSK" />
    </QuizBackground>
  );
}
