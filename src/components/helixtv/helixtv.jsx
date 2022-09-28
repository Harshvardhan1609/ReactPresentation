import React from 'react'
import './helixtv.css'

const Helixtv = () => {
    return (
        <div name='tv' className='handling helixtv'>
            <div className="container">
                <div className="top">
                    <h1>Helix Tv</h1>
                </div>
                <div className="bottom">
                    <a href="https://helixtv.netlify.com" target={"_blank"} rel={"noreferrer"}><button className="btn btn-dark">Helixtv App</button></a>
                </div>
            </div>
        </div>
    )
}

export default Helixtv
