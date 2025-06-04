import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const FormReview = ({ movie_id, reloadReview }) => {

    const initialData = { name: '', vote: '', text: '' };

    const [formData, setFormdata] = useState(initialData);

    const setFieldvalue = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`http://localhost:3000/movies/${movie_id}/reviews`, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                setFormdata(initialData);
                reloadReview();
            });
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h1>Aggiungi la tua recensione</h1>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="" className='control-label'>
                                Nome:
                            </label>
                            <input
                                type="text"
                                className='form-control'
                                name='name'
                                placeholder='nome'
                                required
                                value={formData.name}
                                onChange={setFieldvalue}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className='control-label'>
                                Voto:
                            </label>
                            <input
                                type="number"
                                className='form-control'
                                name='vote'
                                placeholder='vote'
                                required
                                value={formData.vote}
                                onChange={setFieldvalue}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className='control-label'>
                                Testo:
                            </label>
                            <textarea
                                name="text"
                                id="text"
                                className='form-control'
                                value={formData.text}
                                onChange={setFieldvalue}
                            >
                            </textarea>
                            <div className="form-group mt-2">
                                <button className='btn btn-primary' type='submit'>Salva recensione</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormReview
