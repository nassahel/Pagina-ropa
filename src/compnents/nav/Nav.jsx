import './nav.css'
import logo from '../assets/logo.png'
import Search from '../buscador/search'



export function Nav()  {
    return ( 
        <div className="nav">
            <img src={logo}alt="" />
            <Search></Search>
            <ul>
                <li><a href="">Hombre</a></li>
                <li><a href="">Mujeres</a></li>
                <li><a href="">Niños</a></li>
            </ul>
        </div>

    )
}