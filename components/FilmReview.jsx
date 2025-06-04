import React from 'react'



const FilmReview = ({ review }) => {

    const { text, name, vote } = review;

    return (

        <div className="col-12">
            <div className="card p-4">
                <p>Utente: {name}</p>
                <p>Recensione: {text}</p>
                <p>Voto: {vote}</p>
            </div>
        </div>

    )
}

export default FilmReview
