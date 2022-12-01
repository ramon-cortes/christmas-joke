//Ejemplo FETCH - Obtiene información desde JokeAPI https://sv443.net/jokeapi/v2/
// cd /c/rcl/rcl/'emeritus mit'/'jsx react'/fetch_api

const {useState, useEffect } = React;

function Christmas({ text }) {
  return (
    <>{text}</>
  );
}

function Header() {
  return (
    <h3>      
      Random
      <div className="header green"> C</div>
      <div className="header red">H</div>
      <div className="header white">R</div>
      <div className="header green">I</div>
      <div className="header red">S</div>
      <div className="header white">T</div>
      <div className="header green">M</div>
      <div className="header red">A</div>
      <div className="header white">S</div>
      <div className="header"> Joke</div>      
      {/* <Christmas text={'CHRISTMAS'} /> */}
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