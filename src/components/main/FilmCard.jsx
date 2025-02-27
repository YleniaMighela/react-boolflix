// qui genero a lista delle card

export default function FilmCard(props) {

    const { film } = props;




    return (

        <div className="container" >

            <div className="postitem" key={film.id}>

                <h2>{film.title}</h2>
                <h3>{film.original_title} </h3>
                <span>{film.original_language}</span>
                <span>{film.vote_average}</span>

            </div>



        </div>
    )


}
