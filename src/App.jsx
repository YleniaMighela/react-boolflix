// importo lo useState e UseEffect
import { useState, useEffect } from 'react';
// importo la chiamata axios
import axios from "axios";
// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo il global context
import GlobalContexts from "./contexts/GlobalContexts";

// importo i componenti
import MainPage from "./pages/MainPage";
import DefaultLayout from "./layout/DefaultLayout";


function App() {

  // useSTate per gestire i Data dei FILM
  const [films, setFilms] = useState([]);

  // useSTate per gestire i Data delle SERIETV
  const [series, setSeries] = useState([]);

  // variabile per salvare l'API
  const api = "78b08f89c5f899c994084e5ca136fe68";



  //funzione di gestione chiamate API per i FILM
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

    //gestione chiamate API per le SERIE TV
    axios.get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: api,
        query: query
      }
    })

      .then((res) => {
        setSeries(res.data.results);
        // console.log(res.data.results);


      })

      .catch(err => console.log(err));

  }







  useEffect(() => fetchFilms(''), []);




  return (
    <>
      <GlobalContexts.Provider value={{ films, series, fetchFilms }}>
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
