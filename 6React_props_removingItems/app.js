/* notes 6React_props_removingItems
Changing state, click removes items, and refresh brings them back
Functions can also be passed into React components as props. In the case of our
List and Items, we can write a removeItem method on the parent List component,
and pass it in as a prop to the child Item component.*/
const { Component } = React;
const { render } = ReactDOM;

const Loader = ()=> {
  return React.createElement('div', null, '....wait for it');
}
const Item = ( { number, removeItem })=> {
  //console.log(removeItem);
  return React.createElement('li', { onClick: removeItem }, number);
};

const List = ({numbers, removeItem })=> {
  console.log(removeItem);
  const lis = numbers.map( (number, idx) => React.createElement(Item, { key: idx, number, removeItem: ()=> {removeItem(idx)}}));
    return React.createElement('ul', null, lis);
};
class App extends Component{
  constructor(){
    super();
    this.state = {
      numbers: [],
      waiting: true
    };
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        numbers: [
          1, 2, 3, 9
        ],
        waiting: false
      });
    }, 500);
  }

  render(){
    const removeItem = (idx)=> { //function that composes new state
      const numbers = this.state.numbers.filter((number, _idx)=> _idx !== idx);
      //console.log(numbers);      we're interested in the index ^^^^^^^^^^^^
      this.setState( { numbers});
    }
    const { numbers, waiting } = this.state;
    if(waiting) {
      return React.createElement(Loader);
    }
    return React.createElement(List, { numbers, removeItem });
  }
}
const root = document.querySelector('#root');
render(React.createElement(App), root);
