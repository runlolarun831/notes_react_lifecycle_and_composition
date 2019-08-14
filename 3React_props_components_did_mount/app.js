/* notes 3React_props_components_did_mount
-Simulating getting data from 3rd party api, along w/ simulated delay
-always set your state w/ some default values that make sense
when it first loads , it is going to try to map over something that doesn't exist
-We can build a React component called List, for each item in the List's state,
 we can render a child component called Item.*/
const { Component } = React;
const { render } = ReactDOM;

class App extends Component{
  constructor(){
    super();
    this.state = { //state needs default values
      numbers: [],
      waiting: true
    };
  }
  componentDidMount(){ //method that we can put it on React component
    setTimeout(() => {  //setTimeout  gives a 1/2 sec. delay (see nothing)
      this.setState({  //changes the state
        numbers: [
          1, 2, 3, 9
        ],
        waiting: false //change flag  after getting data , no longer waiting
      });
    }, 500);
  }

  render(){
    const { numbers, waiting } = this.state;
    if(waiting) { //displays message to usr while page is loading
      return React.createElement('div', null, '....wait for it');
    }
    const lis = numbers.map( (number, idx) => React.createElement('li', {key: idx }, number));
    return React.createElement('ul', null, lis);
  }
}
const root = document.querySelector('#root');
render(React.createElement(App), root);
