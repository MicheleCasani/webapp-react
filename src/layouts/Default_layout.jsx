import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import GlobalContext from '../contexts/globalContext'
import Loader from '../../components/Loader'

const Default_layout = () => {

    const { isLoading } = useContext(GlobalContext); //consumando il contesto

    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default Default_layout
