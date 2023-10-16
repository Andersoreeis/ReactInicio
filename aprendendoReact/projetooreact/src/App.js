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


  state = {
    arrayObject: [
      { id: 1, titulo: "O titulo1", body: "O Corpo1" },
      { id: 2, titulo: "O titulo2", body: "O Corpo2" },
      { id: 3, titulo: "O titulo3", body: "O Corpo3" },

    ]
  }




  render() {
    const { arrayObject } = this.state
    var teste = "teste"

    return (

      < h1 > teste</h1>
  )
  
  }


}

export default App;


