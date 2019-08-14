/* notes 5React_compose_item_list modifies code from video4
-makes item item component sperate from list component
We can build a React component called List, for each item in the List's state, we can render a child component called Item.*/
const { Component } = React;
const { render } = ReactDOM;

const Loader = ()=> {
  return React.createElement('div', null, '....wait for it');
}
const Item = ( { number})=> {
  return React.createElement('li', null, number)
};

const List = ({numbers})=> { //key always goes on where you collection is
  const lis = numbers.map( (number, idx) => React.createElement(Item, { key: idx, number}));
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
    setTimeout(() => {  //setTimeout  gives a 1/2 sec. delay (see nothing)
      this.setState({
        numbers: [
          1, 2, 3, 9
        ],
        waiting: false
      });
    }, 500);
  }

  render(){
    const { numbers, waiting } = this.state;
    if(waiting) {
      return React.createElement(Loader);
    }
    return React.createElement(List, { numbers});
  }
}
const root = document.querySelector('#root');
render(React.createElement(App), root);
