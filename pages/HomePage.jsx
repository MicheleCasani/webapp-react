import React from 'react'
import FilmCard from '../components/FilmCard'
import { useState, useEffect } from 'react';
import axios from 'axios';


const HomePage = () => {

    const [films, setFilms] = useState([]);

    const fetchMovies = () => {

        axios
            .get("http://localhost:3000/movies/")
            .then((resp) => {
                setFilms(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        fetchMovies();
    }, [])

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
