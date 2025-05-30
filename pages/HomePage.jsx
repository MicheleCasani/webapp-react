import React from 'react'
import FilmCard from '../components/FilmCard'


const HomePage = () => {
    return (
        <>
            <h1 className='text-primary'>Films Blog</h1>
            <h2>
                <i>Il blog sui film più bello che ci sia</i>
            </h2>
            <div className="row gy-4">
                <FilmCard />
            </div>
        </>
    )
}

export default HomePage
