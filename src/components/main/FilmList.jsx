// qui genero a lista dei film
import { useContext } from "react";
import GlobalContexts from "../../contexts/GlobalContexts"


// importo le card
import Filmcard from "./FilmCard";


export default function FilmList() {

    const { films, series } = useContext(GlobalContexts);



    return (
        <>
            {/* film */}

            <div className="container" >
                {films.map((film) => (

                    <Filmcard key={film.id} film={film} />
                ))
                }
            </div>



            {/* serie tv */}

            <div className="container" >
                {series.map((serie) => (

                    <Filmcard key={serie.id} serie={serie} />
                ))
                }
            </div>
        </>


    )


}
