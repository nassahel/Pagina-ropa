import './nav.css'
import logo from '../assets/logo.png'

export function Nav()  {
    return ( 
        <div className="nav">
            <img src={logo}alt="" />
            <ul>
                <li><a href="">Hombre</a></li>
                <li><a href="">Mujeres</a></li>
                <li><a href="">Niños</a></li>
            </ul>
        </div>

    )
}