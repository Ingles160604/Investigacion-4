import './App.css'
import CardGroups from './CardGroups'
import CardGroups2 from './CardGroups2'
import CardGroups3 from './CardGroups3'
import CardGroups4 from './CardGroups4'
import Carousel from './Carousel'

function App() {
  return (
    <div style={{backgroundColor: 'withe'}}>
    <>
    <div className="contenedor">
      <h1>Modelos de implementación de la informática en la nube</h1>
     </div>
     <CardGroups></CardGroups>
    <div className='contenedor2'>
      <h1>Modelos de servicio en la nube.</h1>
    </div>
    <CardGroups2></CardGroups2>
    <div className='contenedor3'>
      <h1>Funcionalidad de los Cloud Services</h1>
    </div>
    <CardGroups3></CardGroups3>
    <CardGroups4></CardGroups4>
    <div className='contenedor4'>
      <h1>Principales empresas que ofrecen Cloud Services</h1>
    </div>
    <Carousel></Carousel>
     </>
     </div>
  )
}

export default App
