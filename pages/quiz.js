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

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    setScreenState(screenStates.QUIZ);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundLogo>
        <QuizContainer>
          <QuizLogo />
          {screenState === screenStates.QUIZ
          && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
          )}
          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
        </QuizContainer>
      </BackgroundLogo>
      <GitHubCorner projectUrl="https://github.com/MarianaSK" />
    </QuizBackground>
  );
}
