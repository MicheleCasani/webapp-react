import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const FIlmsArray = [
    {
        id: 1,
        title: "Titolo 1",
        author: "regista 1",
        abstract: "Lorem ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 2,
        title: "Titolo 2",
        author: "regista 2",
        abstract: "Lorem ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 3,
        title: "Titolo 3",
        author: "regista 3",
        abstract: "Lorem ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 4,
        title: "Titolo 4",
        author: "regista 4",
        abstract: "Lorem ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 5,
        title: "Titolo 5",
        author: "regista 5",
        abstract: "Lorem ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 6,
        title: "Titolo 6",
        author: "regista 6",
        abstract: "Lorem ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
    },
];


const FilmCard = () => {

    const [films, setFilms] = useState(FIlmsArray);

    return (
        <>
            {films.map((film) => {
                return (
                    <div className="col-12 col-md-6 col-lg-4" key={film.id}>
                        <div className="card">
                            <div className="card-image-top">
                                <img src={film.image} alt="film image" className='img-fluid' />
                            </div>
                            <div className="card-body">
                                <h3 className='text-primary'>{film.title}</h3>
                                <h4><em>{film.author}</em></h4>
                                <p>{film.abstract}</p>
                                <Link className="btn btn-primary" to={`/films/${film.id}`}>link</Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default FilmCard
