import React from 'react';
import ReactDOM from 'react-dom';
//reactDOM = tool used to render component
import renderer from 'react-test-renderer';
//^turns html into json
import Card from './Card';



describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    //div is standard placeholder, can be anything
    ReactDOM.render(<Card key={4} title={'hello'} content={'hello'}/>,div);
    //^this is the important line
    ReactDOM.unmountComponentAtNode(div);
    //stop component from being rendered in the div 
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
      .create(<Card key={2} title={'hello'} content={'hello'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});





//smoke test
  //