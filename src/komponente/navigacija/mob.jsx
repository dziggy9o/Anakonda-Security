import React, {useContext} from 'react'
import {NavCtx} from '../ctx'
import {sveLokacije} from '../rute'
import {Link, useRouteMatch} from 'react-router-dom'
import * as i from '../svg'

export const ASNavigacijaMobLink = ({label, to, aSkT}) => {
    let match = useRouteMatch({
        path: to,
        exact: aSkT
    });
    return (
    <Link to={to}  className={match ? 'odabrano' : ''}>{label}</Link>
    )
}

export const NavMobileSadrzaj = () => {
    const [mobNav, setmobNav] = useContext(NavCtx);
    const prikaziSakri = () => {
        if(!mobNav) {
            document.body.classList.add('ASmobNav');
            setmobNav(!mobNav);
        }
        else {
            document.body.classList.remove('ASmobNav');
            setmobNav(!mobNav);
        }
    }

    return (
    <section className="navSadrzaj">
        <Link className="MobLogo" to='/'/>
        <div className='mobLinkovi' onClick={prikaziSakri}>
        {sveLokacije.map(x => {
                if (x.osnovna === true) {
                    return  <ASNavigacijaMobLink key={x.id} aSkT={true} to={x.lokacija} label={x.naziv} />
                }
                else if (x.navigacija === true) {
                return <ASNavigacijaMobLink   key={x.id} to={x.lokacija} label={x.naziv}/>}
                else {
                    return null
                }
                
            })}
        </div>
    </section>
    )
}
export const NavMobile = props => (
    <div className='navigacijaMob'>
        <button className={props.izgled} onClick={props.onClick}>
            <i.MobMenuIco/>
        </button>
    </div>
)