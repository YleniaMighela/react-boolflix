// importo la chiamata axios
import axios from "axios";
// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importo lo useState e UseEffect
import { useState, useEffect } from 'react';


// importo i componenti
import MainPage from "./pages/MainPage";

// importo il global context
import GlobalContexts from "./contexts/GlobalContexts";


import DefaultLayout from "./layout/DefaultLayout";

function App() {

  // useSTat per gestire i Data
  const [films, setFilms] = useState([]);

  // variabile per salvare l'API
  const api = "78b08f89c5f899c994084e5ca136fe68";



  //funzione di gestione chiamate API
  function fetchFilms(query) {
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: api,
        query: query
      }
    })
      .then((res) => {
        setFilms(res.data.results);
        // console.log(res.data.results);

      })

      .catch(err => console.log(err));
  }

  useEffect(() => fetchFilms(), []);




  return (
    <>
      <GlobalContexts.Provider value={{ films, fetchFilms }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<MainPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContexts.Provider>
    </>
  )
}

export default App
