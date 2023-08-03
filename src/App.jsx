import './App.css'
import { Nav } from './compnents/nav/Nav'
import Main from './compnents/Main/Main'
import Categorias from './compnents/categorias/Categorias'

function App() {

  return (
    <div className='App'>
{/* Aqui van los componentes */}
<Nav></Nav>
<Main></Main>
<Categorias></Categorias>
    </div>
  )
}


export default App
