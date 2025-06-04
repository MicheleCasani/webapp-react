import React from 'react'
import FilmReview from '../components/FilmReview'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FormReview from '../components/FormReview';

const FilmPage = () => {


    const { id } = useParams();

    const [film, setFilm] = useState({});

    const fetchFilms = () => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((resp) => {
                console.log("Dati ricevuti:", resp.data);  // Controlla l'intero oggetto
                console.log("Percorso immagine:", resp.data.image);  // Stampa l'immagine corretta
                setFilm(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-12 col-md-6 ">
                    <div className="card ">
                        <div className="card-image-top">
                            <img src={film.image} alt={film.title} className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>{film.title}</h3>
                            <h4><em>{film.author}</em></h4>
                            <p>{film.abstract}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gy-4 my-5">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <h3>Le recensioni della community</h3>
                    </div>
                </div>
                {film.reviews?.map((review) => (
                    <div key={`review-${review.id}`}>
                        <FilmReview review={review} />
                    </div>
                ))}
            </div>
            <div className='mb-5'>
                <FormReview
                    movie_id={film.id}
                    reloadReview={fetchFilms} />
            </div>
        </>
    )
}

export default FilmPage
