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

  const [films, setFilms] = useState([]);


  //funzione di gestione chiamate API
  function fetchFilms() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=78b08f89c5f899c994084e5ca136fe68&query=disney")
      .then((res) => {
        setFilms(res.data.results);
        console.log(res.data.results);

      })

      .catch(err => console.log(err));
  }

  useEffect(() => fetchFilms(), []);




  return (
    <>
      <GlobalContexts.Provider value={{ films }}>
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
