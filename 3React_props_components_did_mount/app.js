// notes 3React_props_components_did_mount
const { Component } = React;
const { render } = ReactDOM;

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
      return React.createElement('div', null, '....wait for it');
    }
    const lis = numbers.map( (number, idx) => React.createElement('li', {key: idx }, number));
    return React.createElement('ul', null, lis);
  }
}
const root = document.querySelector('#root');
render(React.createElement(App), root);
