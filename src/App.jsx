import './App.css'
import { Nav } from './compnents/nav/Nav'
import Main from './compnents/Main/Main'
import Productos from './compnents/productos/Productos'
import Categorias from './compnents/categorias/Categorias'

function App() {

  return (
    <div className='App'>
{/* Aqui van los componentes */}
<Nav></Nav>
<Main></Main>
<Productos></Productos>
<Categorias></Categorias>
    </div>
  )
}


export default App
