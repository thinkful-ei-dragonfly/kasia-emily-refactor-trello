import React from "react"; 
import List from "./List"; 
import STORE from './STORE';
import { listenerCount } from "cluster";


class App extends React.Component { 
  
    state = {
      lists: STORE.lists,
      allCards: STORE.allCards,
    }
  
   handleDelete = (listId,id) => {
    const { lists } = this.state;
    const remainingLists = lists.map(list => {
      if (list.id === listId){
      let modifiedArray= list.cardIds.filter(cardId => cardId !== id)
        let newList = Object.assign({}, list, {cardIds: modifiedArray})
        //so that we dont mutate the object
        // we  want to loop through card id's
        return newList;
      }else {
        return list;
      }
    
    })
  
      
     
    this.setState({

        lists: remainingLists 
     })
    }
 
  newRandomCard= () => {
    const newId = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      newId,
      title: `Random Card ${newId}`,
      content: 'lorem ipsum'
    }
   
  }

  handleNewCard = (listId, newId) => {
    const { lists } = this.state;
    const addedCardList = lists.map(list => {
      if (list.id === listId) {
        // cardIds.push(newId)
      let newList = Object.assign({}, list, {cardIds: cardIds.push(newId)})
      let newAllCardsList = Object.assign({}, allCards, { id: newId })
       return newList, newAllCardsList
      } else {
        return list
      }
    
  })

    this.setState({
      lists: addedCardList,
      allCards: newAllCardsList

    })
  }



//New state needs new card to allcards and new id to cardIds in appropriate 

  
  


  

  
  render() { 
    return (  
      <main className="App"> 
        <header className="App-header">
          <h1>Trelloyes</h1>  
        </header> 
        <div className="App-List">
          {this.state.lists.map((list, i) => ( 
            
            <List 
              key={i}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              handleClick={this.handleDelete}
              listId={list.id}
              handleRandom={this.handleRandom}
              newCardId={newId}
              handleNewCard={this.handleNewCard}
              handleNewCard2={this.handleNewCard2}
              
            />
          ))}
          </div>
        </main>
      );
    }

  }
export default App 
