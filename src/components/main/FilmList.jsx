// qui genero a lista dei film
import { useContext } from "react";
import GlobalContexts from "../../contexts/GlobalContexts"

export default function FilmList() {

    const { films } = useContext(GlobalContexts);




    return (
        <div className="container" >
            {films.map((film) => (
                <div className="postitem">
                    <div key={film.id}>
                        <h2>{film.title}</h2>
                        <h3>{film.original_title} </h3>
                        <span>{film.original_language}</span>
                        <span>{film.vote_average}</span>

                    </div>
                </div>


            ))}
        </div>
    )


}
