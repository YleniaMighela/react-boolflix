// qui genero a lista dei film
import { useContext } from "react";
import GlobalContexts from "../../contexts/GlobalContexts"


// importo le card
import Filmcard from "./FilmCard";


export default function FilmList() {

    const { films } = useContext(GlobalContexts);




    return (
        <>
            {
                films.map((film) => (

                    <Filmcard key={film.id} film={film} />


                ))
            }
        </>


    )


}
