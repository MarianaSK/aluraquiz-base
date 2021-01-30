/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import db from '../../../db.json';
import Widget from '../../components/Widget';
import BotaoJogar from '../../components/BotaoJogar';

function QuestionWidget({ question, totalQuestions, questionIndex }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <BotaoJogar type="submit">
          Confirmar
        </BotaoJogar>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
