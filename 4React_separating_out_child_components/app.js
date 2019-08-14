// notes 4React_separating_out_child_components
const { Component } = React;
const { render } = ReactDOM;

const Loader = ()=> {
  return React.createElement('div', null, '....wait for it');
}

const List = ({numbers})=> {
  const lis = numbers.map( (number, idx) => React.createElement('li', {key: idx }, number));
    return React.createElement('ul', null, lis);
}
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
