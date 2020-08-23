import React from 'react'
import {sveLokacije} from '../komponente/rute'
import {Link} from 'react-router-dom'

export const usluge = [
    {tekst: 'Fizička, protivpožarna i tehnička zaštita imovine'},
    {tekst: 'Poljočuvarska služba'},
    {tekst: 'Čišćenje'},
    {tekst: 'Instalacija bezbednosne opreme'},
]

export const Pocetna = () => (
    <section className="pocetna">
        {sveLokacije.map((x,i) => {
            if(x.pocetna) {
                return (
                    <div key={i} className='usluge'>
                        <Link to={x.lokacija} className="hover">
                            <div className='h-prikaz'>
                                <div className='tekst'>{x.naziv}</div></div>
                            <div className='prikaz'>{x.naziv}</div>
                        </Link>
                    </div>
                )
            }
            else {
                return null
            }
            
        })}
    </section>
)