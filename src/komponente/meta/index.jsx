import React from 'react'
import {Helmet} from 'react-helmet'

export const Meta = props => (
    <Helmet>
        <title>{props.naziv}</title>
        <meta
            name="description"
            content={props.opis}
        />
        <meta name='author' content='City Marketing Service'/>
        <link rel="canonical" href={`http://anakondasecurity.rs${props.lokacija}`} />
        <meta property="og:title" content={props.naziv}/>
        <meta property="og:description" content={props.opis}></meta>

    </Helmet>
)