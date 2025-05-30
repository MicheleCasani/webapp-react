import React from 'react'



const FilmReview = ({ review }) => {

    const { text, author, vote } = review;

    return (

        <div className="col-12">
            <div className="card p-4">
                <p>Recensione: {text}</p>
                <p>Voto: {vote}</p>
                <p>Utente: {author}</p>
            </div>
        </div>

    )
}

export default FilmReview
