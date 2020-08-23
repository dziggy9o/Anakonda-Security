import React from 'react'
import {useLocation} from 'react-router-dom'

export function Nepostojeca() {
    let lokacija = useLocation();
    return (
        <section className="Nepostojeca">
        <div className="sadrzaj">
            Stranica ne postoji: <span>anakondasecurity.rs{lokacija.pathname}</span>
            <div className="znak"><p>4</p><img src='/img/logo/asw.svg'alt='404'/><p>4</p></div>
        </div>
        </section>
    )
}