//Ejemplo FETCH - Obtiene información desde JokeAPI https://sv443.net/jokeapi/v2/
// cd /c/rcl/rcl/'emeritus mit'/'jsx react'/fetch_api

//import { Test } from './test.jsx';
const {useState, useEffect } = React;

function Christmas({ text }) {

  const [color, setColor] = useState('header green');

  setInterval(switchColor, 650, color, setColor);

  return (
    <div className={color}>
      {text}
    </div>
  );
}

function switchColor(color, setColor) {
  let newColor = color;
  if (newColor == 'header green') {
    newColor = 'header white';
  } else if (newColor == 'header white') {
    newColor = 'header red';
  } else if (newColor == 'header red') {
    newColor = 'header green';
  }
  //console.log(newColor);
  setColor(newColor);
}

function Header() {
  return (
    <h3>      
      Random
      <Christmas text=' CHRISTMAS' />
      <div className="header"> Joke</div>      
      
    </h3>
  );
}

function Joke() {
  const url = 'https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit';
  const [joke, setJoke] = useState({});
  const [request, setRequest] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      axios.get(url)
        .then(result => {
          setJoke(result.data);
        })
        .catch(error => console.log(error));
    }

    fetchData();
  }, [request]);

  const newRequest = () => {
    let requested = request;
    requested ? requested = false : requested = true;
    setRequest(requested);
  }

  return (
    <>
      <ul>
        <li>{joke.setup}</li>
        <li> </li>
        <li>{joke.delivery}</li>
    </ul>
    <button onClick={newRequest}>New Joke</button>
    </>

  );
}

function App() {
  
  return (
    <>
      <Header />
      <div>
        Joke:        
        <Joke />
      </div>
      <div className="note">
        <p>NOTE: Dont click more than once a second</p>        
      </div>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/*
  axios.get(url, config) 
                   ↓
  const config = {
  headers:{
    header1: value1,
    header2: value2
  }
};*/