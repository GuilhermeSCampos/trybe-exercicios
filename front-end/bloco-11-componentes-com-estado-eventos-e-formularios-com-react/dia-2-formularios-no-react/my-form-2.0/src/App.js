import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <label>Nome:
            <input maxLength="40" required name="name"/>
          </label>
          <label>Email:
            <input maxLength='50' required name="email"/>
          </label>
          <label>CPF:
            <input maxLength='11' required name="cpf"/>
          </label>
          <label>Endereço:
            <input maxLength='200' required name="endereco"/>
          </label>
          <label>Cidade:
            <input maxLength='200' required name="endereco"/>
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
