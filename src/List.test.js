import React from 'react';
import ReactDOM from 'react-dom';
//reactDOM = tool used to render component
import renderer from 'react-test-renderer';
//^turns html into json
import List from './List';



describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(<List
      key={3}
      header={'hello'}
      cards={[{ id: "a", title: "First card", content: "lorem ipsum" },{ id: "b", title: "Second card", content: "lorem ipsum" }]}/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
   
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
      .create(<List
        key={3}
        header={'hello'}
        cards={[{ id: "a", title: "First card", content: "lorem ipsum" }, { id: "b", title: "Second card", content: "lorem ipsum" }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});