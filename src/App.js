import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
/*import Popper from 'popper.js';*/
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './navbar';
import Carrousel from './carrousel';
import Form from './form';
import Accordion from './accordion';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <Carrousel/>
     <Accordion/>
     
     <Form/>
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"xit
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
