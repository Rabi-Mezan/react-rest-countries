
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* <Countries></Countries> */}
    </div>
  );
}



// dynamic country load
//........................................
// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data)), [])
//   return (
//     <div>
//       <h1>We Are On World Tour !!</h1>
//       <p>Total Country In The World : {countries.length}</p>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div className='country-display'>
//       <div className='country-style'>
//         <h3>Country Name:{props.name}</h3>
//         <h3>Capital Name:{props.capital}</h3>
//       </div>
//     </div>
//   )
// }



export default App;
