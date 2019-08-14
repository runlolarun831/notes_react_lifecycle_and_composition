/* notes 2React_prop_setting_up_the_state
When using state in a component, we can declare an initial value
for this state inside the constructor() method of the component.*/
const { Component } = React;
const { render } = ReactDOM;

class App extends Component{
  constructor(){
    super();
    this.state = {
      numbers: [
        1, 2, 3, 9
      ]
    };
  }
  render(){
    const { numbers } = this.state; // destructuring numbers
    const lis = numbers.map( (number, idx) => React.createElement('li', {key: idx }, number));
    return React.createElement('ul', null, lis);
  }
}
const root = document.querySelector('#root');
render(React.createElement(App), root);
