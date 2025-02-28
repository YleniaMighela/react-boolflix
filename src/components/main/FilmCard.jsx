// qui genero a lista delle card

export default function FilmCard(props) {

    const { film } = props;



    // mi salvo in una costante il path del percorso della bandiera non corrispondente alla lingua

    const errFlag = "../../../flags/rainbow.png"
    return (




        <div className="postitem" key={film.id}>

            <h2>Titolo {film.title}</h2>
            <h3> Titolo originale {film.original_title} </h3>
            {/* <span> Lingua {}</span> */}
            <img src={`../../../flags/${film.original_language}.png`} alt="{film.original_language}" onError={(e) => e.target.src = errFlag} />
            <br />
            <span> Voto {film.vote_average}</span>

        </div>




    )


}
