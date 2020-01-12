import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div className='message'>{props.text}</div>;

const MessageField = (props) => {
  return props.messages.map(message => <MessageComponent text={ message }/>);
};

const SendMessageButton = () => {
  function handleClick() {
    messages.push('Нормально');

    ReactDOM.render(
      <App/>,
      document.getElementById('root'),
    );
  }

  return <button onClick={handleClick}>Отправить</button>;
};

const App = () => {
  return (
    <div>
      <MessageField messages={ messages }/>
      <SendMessageButton/>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);