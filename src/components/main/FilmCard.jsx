// importo il fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// qui genero a lista delle card

export default function FilmCard({ film, serie }) {

    // console.log(film, serie);



    // creo una funzione che ci premette di convertire le stelle attraverso il math(che arrotonda x eccesso)
    const converStars = (voto) => {

        //inizializzo una varibiale con valore array vuoto in cui il ciclo andrà a pushare la condizione in cui se l'indice è inferiore a 5 (stelle piene) viene aggiunta all'array una stella gialla, altrimenti viene aggiunta una stella grigia
        let stars = [];


        const points = Math.ceil(voto / 2);


        for (let i = 0; i < 5; i++) {
            if (i < points) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                    />
                );
            } else {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#e6e6e6" }}
                    />
                );
            }
        }

        return stars;
    };
















    // mi salvo in una costante il path del percorso della bandiera non corrispondente alla lingua
    const errFlag = "../../../flags/ee.png"


    // attraverso una costante utilizzando l'operatore ternario, ho modo di verficare se esiste l'immagine relativa al percorso
    const imgPresent = film ? film.poster_path : serie?.poster_path;

    // Se l'immagine è presente mostramela 
    if (!imgPresent) {
        // se non è presente non ritornarmi nulla
        return null;
    }

    return (

        <>



            {/* film */}


            {film && (
                <div className="postitem" key={film.id}>
                    <h1>Sezione FILM</h1>

                    <div className='postText'>
                        <h2>Titolo {film.title}</h2>

                        <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title} />


                        <h3> Titolo originale {film.original_title} </h3>

                        <img src={`../../../flags/${film.original_language}.png`} alt={film.original_language} onError={(e) => e.target.src = errFlag} />

                        <br />

                        <span> Voto : {converStars(film.vote_average)}</span>

                        <h3>Overview: {film.overview}</h3>
                    </div>
                </div>
            )}

            {/* serie tv */}
            {serie && (
                <div className="postitem" key={serie.id}>
                    <h1>Sezione SERIETV</h1>

                    <div className='postText'>
                        <h2>Titolo {serie.name}</h2>

                        <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt={serie.name} />


                        <h3> Titolo originale {serie.original_name} </h3>

                        <img src={`../../../flags/${serie.original_language}.png`} alt={serie.original_language} onError={(e) => e.target.src = errFlag} />

                        <br />

                        <span> Voto : {converStars(serie.vote_average)}</span>

                        <h3>Overview: {serie.overview}</h3>
                    </div>
                </div>)}

        </>

    )


}
