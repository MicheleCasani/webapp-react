import React from 'react'
import FilmReview from '../components/FilmReview'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FilmPage = () => {


    const { id } = useParams();

    const [film, setFilm] = useState({});

    const fetchFilms = () => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((resp) => {
                setFilm(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
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
                {film.abstract.map((review) => (
                    <div key={`review-${review.id}`}>
                        <FilmReview review={review} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default FilmPage
