import React from 'react'
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {

    return (
        <>

            <div className="col-12 col-md-6 col-lg-4" key={film.id}>
                <div className="card">
                    <div className="card-image-top">
                        <img src={film.image} alt="film image" className='img-fluid' />
                    </div>
                    <div className="card-body">
                        <h3 className='text-primary'>{film.title}</h3>
                        <h4><em>{film.author}</em></h4>
                        <p>{film.abstract}</p>
                        <Link className="btn btn-primary" to={`/films/${film.id}`}>Dettaglio</Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FilmCard
