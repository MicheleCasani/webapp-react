import React from 'react'
import FilmCard from '../components/FilmCard'
import { useState } from 'react';

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

const HomePage = () => {

    const [films, setFilms] = useState(FIlmsArray);

    return (
        <>
            <h1 className='text-primary'>Films Blog</h1>
            <h2>
                <i>Il blog sui film più bello che ci sia</i>
            </h2>
            <div className="row gy-4">
                {films.map((film) => {
                    return (
                        <FilmCard
                            film={film}
                            key={`film-${film.id}`} />
                    );
                })}
            </div>
        </>
    )
}

export default HomePage
