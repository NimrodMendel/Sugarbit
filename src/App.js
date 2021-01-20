import { Navbar } from 'react-bootstrap';
import './App.css';
import SugarBitForm from './components/SugarBitForm';

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">Sugarbit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Welcome to Sugarbit!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <SugarBitForm />
      </>
  );
}

export default App;
