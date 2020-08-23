import React from 'react'
import {Stranica} from '../stranica'
import {KontaktForma} from '../../komponente'
import {RefLista} from './nizovi'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {sveLokacije} from '../../komponente/rute'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 730,
    },
  }));

export const Onama = props => {
    const classes = useStyles();
    const slike = [
        {img: '/img/onama/slika-onama1.jpg', tekst: 'Slika 1', cols: 2},
        {img: '/img/onama/slika-onama4.jpg', tekst: 'Slika 3', cols: 1},
        {img: '/img/onama/slika-onama3.jpg', tekst: 'Slika 2', cols: 1},
        {img: '/img/onama/slika-onama2.jpg', tekst: 'Slika 4', cols: 2}
    ]
    return (
        <Stranica Kategorija={'sadrzaj'} Naslov={'- O nama'} img={'/img/ikone/onamaw.svg'} pozadina={'/img/stranice/onama.jpg'} >
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className={classes.root}>
            <GridList cellHeight={360} className={classes.gridList} cols={3}>
                {slike.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.tekst} />
                </GridListTile>
                ))}
            </GridList>
            </div>
        </Stranica>
    )
}


export const Usluge = props => {

    return (
        <Stranica Kategorija={'sadrzaj'} Naslov={'- Usluge'} img={'/img/ikone/uslugew.svg'} pozadina={'/img/stranice/usluge.jpg'} >
            <div className="usluge">
                {sveLokacije.map((x,i) => {
                    if(x.pocetna) {
                        return (
                            <Link key={i} className='usluga' to={x.lokacija}>
                                
                                <h5>{x.naziv}</h5>
                            </Link>
                        )
                    }
                    else {
                        return null
                    }
                })}
            </div>
        </Stranica>
    )
}
export const UslugeFtpZastita = props => (
    <Stranica Kategorija={'sadrzaj'} Naslov={'Fizička, protivpožarna i tehnička zaštita imovine'} pozadina={'/img/usluge/1.jpg'}>
        <p>
        <b>Opšte odredbe:</b> Fizičko-tehnička zaštita je usluga obezbeđenja lica i imovine primenom fizičke zaštite i korišćenjem sredstava tehničke zaštite, angažovanjem službenika obezbeđenja osposobljenog i obučenog za poslove čuvanja imovine, zaštite od požara, pružanja recepcionarskih usluga kao i sprovođenja unutrašnjih pravila u štićenom objektu.
        </p>
        <br/>
        <p>
            <b>
             U sklopu fizičko-tehničkog obezbeđenja, obavljamo sledeće vrste usluga:
            </b>
            <br/>
            <br/>- portirska, recepcionerska i čuvarska služba, mobilno obezbeđenje (patroliranje-obilazak) štićenih objekata, zaštitu lica (ljudi) i obezbeđenje skupova;
            <br/>- u našem preduzeću angažovani su stručnjaci iz oblasti bezbednosti (penzionisani pripadnici Vojske i MUP-a) koji su osposobljeni da sa određenim timovima i u saradnji sa ovlašćenim licima MUP-a, evidentiraju i izvrše uviđaj u slučaju krađe, sabotaže, štete i drugih prekršaja kojima se nanosi šteta korisniku usluga;
            <br/>- u dosadašnjem radu, ostvarili smo dobru saradnju sa ovlašćenim licima MUP-a, čime je unapređen i kvalitet usluga;
            <br/>- svi za posleni su u obavezi da završe osnovnu obuku za protivpožarnu zaštitu (PPZ) a određeni broj zaposlenih je završio i stručnu obuku iz PPZ, pored toga, po potrebi, u preduzeću imamo angažovano lice sa visokom stručnom spremom (master) i položenim stručnim ispitom iz PPZ, kao i lice za bezbednost i zdravlje na radu i lice koje je master zaštite životne sredine .
        </p>
        
    </Stranica>
)

export const UslugePoljocuvarskaSluzba = props => (
    <Stranica Kategorija={'sadrzaj'} Naslov={'Poljočuvarska služba'} pozadina={'/img/usluge/2.jpg'}></Stranica>
)

export const UslugeCiscenje = props => (
    <Stranica Kategorija={'sadrzaj'} Naslov={'Čišćenje'} pozadina={'/img/usluge/3.png'}></Stranica>
)

export const UslugeBezbedonosna = props => (
    <Stranica Kategorija={'sadrzaj'} Naslov={'Instalacija bezbednosne opreme'} pozadina={'/img/usluge/4.jpg'}></Stranica>
)


export const Reference = props => {
    return (
        <Stranica Kategorija={'sadrzaj'} Naslov={'- Referentna lista'} img={'/img/ikone/refw.svg'} pozadina={'/img/stranice/reference.jpg'} >
            <h3>FIZIČKO - TEHNIČKO  OBEZBEĐENJE</h3>
            <ul>
            {RefLista.fizteh.map(x => {
                if (x.Sadrzaj) {
                    return (
                        <li>{x.Naziv}
                            <ul>
                                {x.Sadrzaj.map(y => (
                                    <li>{y.Naziv}</li>
                                ))}
                            </ul>
                        </li>
                    )
                }
                else {
                    return (
                        <li>{x.Naziv}</li>
                    )
                }
            })}
            </ul>
            <p>Pored napred navedenih bilo je i više objekta koji su obezbeđivani u određenom periodu.</p>
            <h3>OBEZBEĐENJE  SPORTSKIH  I KULTURNIH  MANIFESTACIJA</h3>
            <p>Obezbeđivali smo svake godine sve značajnije manifestacije u Somboru i Odžacima, od kojih izdvajamo : </p>
            <ul>
            {RefLista.obzsp.map(x => (
                <li>{x.Naziv}</li>
            ))}
            </ul>
            <h3>MONTAŽA, PUŠTANJEU RAD I ODRŽAVANJE SISTEMA TEHNIČKE ZAŠTITE</h3>
            <p>{RefLista.montaza}</p>
            <p><h3>POLJOČUVARSKA SLUŽBA</h3>{RefLista.polj}</p>
        </Stranica>
    )
}


export const Kontakt = props => {
    return (
        <Stranica Kategorija={'forma'} Naslov={'- Kontakt'} img={'/img/ikone/kontaktw.svg'} pozadina={'/img/stranice/kontakt.jpg'} >
            <KontaktForma />
        </Stranica>
    )
}