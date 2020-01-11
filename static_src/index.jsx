import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div className='message'> {props.text} </div>;
const MessageField = (props) => {
  return props.messages.map((message, idx) => <MessageComponent key={idx} text={message}/>);
};

ReactDOM.render(
  <MessageField messages={messages}/>,
  document.getElementById('root'),
);