// qui genero a lista delle card

export default function FilmCard(props) {

    const { film } = props;




    return (


        <div className="container" >

            <div className="postitem" key={film.id}>

                <h2>Titolo {film.title}</h2>
                <h3> Titolo originale {film.original_title} </h3>
                {/* <span> Lingua {}</span> */}
                <img src={`../../../flags/${film.original_language}.png`} alt="{film.original_language}" />
                <br />
                <span> Voto {film.vote_average}</span>

            </div>



        </div>
    )


}
