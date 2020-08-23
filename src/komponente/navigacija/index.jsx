import React, {useState,useContext} from 'react'
import {NavCtx} from '../ctx'
import {Link, useRouteMatch} from 'react-router-dom'
import {sveLokacije} from '../rute'
import { useEffect } from 'react'
import {NavMobile} from './mob'
export {NavMobileSadrzaj} from './mob'




export const Navigacija = () => (
    <div className='Navigacija'>
        {sveLokacije.map(x => {
            if (x.osnovna === true) {
                return  <ASnav key={x.id} aSkT={true} to={x.lokacija} label={x.naziv} />
            }
            else if (x.navigacija === true) {
                return  <ASnav key={x.id} to={x.lokacija} label={x.naziv} />
            }
            else {
                return null
            }
            
           
        })}
    </div>
)

function ASnav ({label, to, aSkT}) {
    let match = useRouteMatch({
        path: to,
        exact: aSkT
    });
    return (
    <Link to={to} className={match ? 'odabrano' : ''}>{label}</Link>
    )
}

export const HeaderMob = () => {
    const [mobNav, setmobNav] = useContext(NavCtx);
    const [skrollKlasa, setskrollKlasu] = useState('');
        useEffect(()=> {
            window.addEventListener('scroll', () => {
                window.scrollY === 0 ? setskrollKlasu('') : setskrollKlasu('skroll')
            })
        })
        const prikaziSakri = () => {
            if (!mobNav) {
                document.body.classList.add('ASmobNav');
                setmobNav(!mobNav);
            }
            else {
                document.body.classList.remove('ASmobNav');
                setmobNav(!mobNav);
            }
        }
    const MobNavUklj = mobNav ? 'odabrano' : ''
    return (
        <nav class={`HeaderMob ${skrollKlasa}`}>
            <div className="Logo"/>
            <NavMobile izgled={MobNavUklj} onClick={prikaziSakri}/>
        </nav>

    )
}