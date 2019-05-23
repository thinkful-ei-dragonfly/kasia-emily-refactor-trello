import React from "react"; 
import List from "./List"; 
import STORE from './STORE';


class App extends React.Component { 
  
    state = STORE
  
   handleDelete = (id) => {
    const remainingCards = this.state.lists.map((list, i) => 
    (list.cardIds.filter(id => this.state.allCards[id] !== id )))
       
     this.setState({
        allCards: remainingCards
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
            />
          ))}
          </div>
        </main>
      );
    }
}

export default App 
