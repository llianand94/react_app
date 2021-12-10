import React, { useReducer, useEffect } from 'react';
import {getJSON} from './../../api';
import reducer from './reducer';


const Chat = () => {
  const [state, dispatch] = useReducer(reducer,{
    authors:[],
    messages:[]
  });
  useEffect(() => {
    getJSON('/chat.json')
    .then((data)=>dispatch({
      type:'DATA_RESPONCE_SUCCESS',
      data
    }))
    .catch(err=>console.log(err))
    .finally()
    ;
  }, []);
  
  return (
    <div>
      <h2>Chat Page</h2>
      {state.messages.map((message)=>(
        <article key={message.id}>
        <h3>{message.authorName}</h3>  
        <p>{message.text}</p>
        </article>
        )
      )
      }
    </div>
  );
}

export default Chat;
