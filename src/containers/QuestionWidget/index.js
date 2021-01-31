/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import db from '../../../db.json';
import Widget from '../../components/Widget';
import BotaoJogar from '../../components/BotaoJogar';

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit,
}) {
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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
        <form onSubmit={(evento) => {
          evento.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
            onSubmit();
          }, 3 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternative}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <BotaoJogar type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </BotaoJogar>
          {isCorrect && isQuestionSubmited && <p>Correto!</p>}
          {!isCorrect && isQuestionSubmited && <p>Incorreto!</p>}
        </form>

      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
