import React from 'react'
import * as AS from './komponente'
import {BrowserRouter as Router} from 'react-router-dom'
import {ASprovider} from './komponente/ctx'

export const AnakondaSecurity = () => (
    <ASprovider>
    <Router>
        <div className='AnakondaSecurity-tema'>
        <AS.LeviSidebar />
        <AS.HeaderMob />
        <AS.Rute />
        <AS.NavMobileSadrzaj/>
        </div>
    </Router>
    </ASprovider>
)

