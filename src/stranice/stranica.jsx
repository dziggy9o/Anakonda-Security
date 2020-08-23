import React from 'react'

export const Stranica = props => {
    return (
        <section className="Stranica">
            <div className="pozadina" style={{backgroundImage: `url(${props.pozadina})`}}/>
            <div className={props.Kategorija}>
                
                <h3 className='naslov'>{props.img ? <img src={props.img} alt={props.Naslov}/> : null}{props.Naslov}</h3>
                {props.children}
            </div>
        </section>
    )
}