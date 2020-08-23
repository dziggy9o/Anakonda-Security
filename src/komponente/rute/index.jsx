import React from 'react'
import * as STR from '../../stranice'
import {Meta} from '../meta'
import { Switch, Route} from 'react-router-dom'

export const sveLokacije = [
    {id: 1, naziv: 'Početna', navigacija: true, osnovna: true, lokacija: '/', komponenta: <STR.Pocetna/>, opis: 'Anakonda security -'},
    {id: 2, naziv: 'O nama', navigacija: true, osnovna: false, lokacija: '/onama', komponenta: <STR.Onama/>, opis: 'Anakonda security -'},
    {id: 3, naziv: 'Usluge', navigacija: true, osnovna: false, lokacija: '/usluge', komponenta: <STR.Usluge/>, opis: 'Anakonda security -'},
    {id: 4, naziv: 'Reference', navigacija: true, osnovna: false, lokacija: '/reference', komponenta: <STR.Reference/>, opis: 'Anakonda security -'},
    //{id: 5, naziv: 'Zaposlenje', navigacija: true, osnovna: false, lokacija: '/zaposlenje', komponenta: <STR.Stranica  pozadina={'/img/stranice/zaposlenje.jpg'}/>},
    {id: 6, naziv: 'Kontakt', navigacija: true, osnovna: false, lokacija: '/kontakt', komponenta: <STR.Kontakt/>, opis: 'Anakonda security -'},
    {id: 7, naziv: 'Fizička, protivpožarna i tehnička zaštita imovine', pocetna: true, navigacija: false, osnovna: false, lokacija: '/usluge/fpt-zastita', komponenta: <STR.UslugeFtpZastita/>, opis: 'Anakonda security -'},
    {id: 8, naziv: 'Poljočuvarska služba', pocetna: true, navigacija: false, osnovna: false, lokacija: '/usluge/poljocuvarska-sluzba', komponenta: <STR.UslugePoljocuvarskaSluzba/>, opis: 'Anakonda security -'},
    {id: 9, naziv: 'Čišćenje',pocetna: true, navigacija: false, osnovna: false, lokacija: '/usluge/ciscenje', komponenta: <STR.UslugeCiscenje/>, opis: 'Anakonda security -'},
    {id: 10, naziv: 'Instalacija bezbednosne opreme',pocetna: true, navigacija: false, osnovna: false, lokacija: '/usluge/bezbedonosna-oprema', komponenta: <STR.UslugeBezbedonosna/>, opis: 'Anakonda security -'},
    {id: 100, naziv: 'Nepostojeca', navigacija: false, osnovna: false, lokacija: '*', komponenta: <STR.Nepostojeca/>, opis: 'Anakonda security -'},
]

export function Rute() {
    return (
        <Switch>
            {sveLokacije.map(x => {
                if (x.osnovna === true) {
                    return (
                    <Route  exact path={x.lokacija}>
                        <Meta {...x} />
                        {x.komponenta}
                    </Route>)
                }
                else {
                    return (
                    <Route exact path={x.lokacija}>
                        <Meta {...x} />
                        {x.komponenta}
                    </Route>)
                }
            })}
        </Switch>
    )
}