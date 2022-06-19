import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ["limpar", "estudar", "japones", "trybe", "lol"];

function App() {
  return compromissos.map((element) => <li>{element}</li>);
}

export default App;
