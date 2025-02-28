import { useState, useContext } from 'react';
import GlobalContexts from "../../../contexts/GlobalContexts"


// mi creo una variabile di stato (oggetto) in cui si andranno a mappare le proprietà selezionate assegnandogli un valore iniziale
const initialFormData = { cerca: " " };

export default function Form() {




    // utilizzo lo useState per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData);


    // questa costante richiama la funzione che fa partire la chiamata per i film
    const { fetchFilms } = useContext(GlobalContexts);

    // funzione che andrà a gestire le informazioni dei campi
    function handleFormData(e) {
        // gestione del value a seconda del tipo di input
        const value = e.target.value;

        // inquesto momento currentFormaData prende tutti l'oggetto precedente, ma al momento dell'onChange lo modifica con i nuovi dati inseriti
        setFormData({ cerca: value });
    }

    // funzione di gestione dell'invio del form
    function handleSubmit(e) {
        e.preventDefault();
        fetchFilms(formData.cerca);
    }

    return (
        <>
            {/* form che gestirà la ricerca dei film*/}
            <form onSubmit={handleSubmit}>
                {/* input per ricerca */}
                <input
                    type="text"
                    name="cerca"
                    onChange={handleFormData}
                    value={formData.cerca}
                    placeholder='Trova il tuo film'
                />

                <button> Cerca </button>
            </form>
        </>

    );
}