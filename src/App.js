import React from "react"; 
import List from "./List"; 
import STORE from './STORE';


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
            />
          ))}
          </div>
        </main>
      );
    }
}

export default App 
