// importo i componenti
import Header from "./components/header/Header";
import Main from "./components/main/Main";

// importo il global context
import GlobalContexts from "./contexts/GlobalContexts";

// importo la chiamata axios
import axios from "axios";


// importo lo useState e UseEffect
import { useState, useEffect } from 'react';


function App() {

  const [film, setFilm] = useState([]);


  //funzione di gestione chiamate API
  function fetchFilm() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=78b08f89c5f899c994084e5ca136fe68&query=disney")
      .then((res) => {
        setFilm(res.data.results);
        // console.log(res.data.results);

      })

      .catch(err => console.log(err));
  }

  useEffect(fetchFilm, []);












  return (
    <>
      <GlobalContexts.Provider value={{ film }}>

        <Header />
        <Main />

      </GlobalContexts.Provider>
    </>
  )
}

export default App
