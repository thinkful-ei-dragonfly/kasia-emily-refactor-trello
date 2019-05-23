import React from 'react';



export default function(props) {
  return (
    <div className="Card">
      <button type="button" onClick={() => props.handleClick(props.listId, props.id)} >delete</button> 
      <h3>{props.title}</h3>
      <p>{props.content}</p> 
    </div>
  );
}