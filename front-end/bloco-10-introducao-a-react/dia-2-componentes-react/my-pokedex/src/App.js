import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

const items = pokemons.map((pokemon) => {
  const {name, type, image} = pokemon;
  const {value, measurementUnit:unit} = pokemon.averageWeight;
  return <Pokemon key={name} name={name} type={type} image={image} value={value} unit={unit}/>
})

function App() {
  return (
    <div className='cards'>
      {items}
    </div>
  );
}

export default App;
