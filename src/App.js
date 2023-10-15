import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//  function App() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
//      </div>
//    );
// }


class App extends Component {
  state = { name: "Anderson Reis", count: 0 }



  handleClickH1 = () => {

    this.setState({ name: "Joara" })


  }

  handleClickerLink = () => {
    const { count } = this.state
    this.setState({ count: count + 1 });


  }



  render() {
    const nome1 = this.state.name
    const { name, count } = this.state
    return (
      <div><h1 onClick={this.handleClickerLink}>{count}</h1></div>
    )
  }


}

export default App;


