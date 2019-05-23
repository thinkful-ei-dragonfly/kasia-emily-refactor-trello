import React from "react";
import Card from "./Card";




export default function (props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card => (
          <Card key={card.id} title={card.title} content={card.content} 
          handleClick={props.handleClick} id={card.id} listId={props.listId}
           />
        ))}

        <button type="button" className="List-add-button" onClick={() => props.handleNewCard(props.listId)}>
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
