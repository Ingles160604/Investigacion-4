import React from 'react'
import './App.css';
import { Card,CardImg,CardGroup,CardBody,CardTitle, CardSubtitle, CardText } from 'reactstrap'
import IaaS from './imagenes/IaaS.png'
import PaaS from './imagenes/PaaS.jpg'
import SaaS from './imagenes/Saas.png'

export default function CardGroups2() {
  return (
    <CardGroup>
    <Card className='conteiner'>
      <CardImg className='Info2'
        alt="Card image cap"
        src={IaaS}
        top
        width={300}
        height={300}
      />
      <CardBody>
        <CardTitle tag="h5">
        IaaS
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Infraestructura como servicio
        </CardSubtitle>
        <CardText>
        En este modelo, el proveedor de servicios en la nube ofrece una infraestructura de TI virtualizada que incluye recursos como servidores virtuales, almacenamiento, redes y sistemas operativos. Los usuarios pueden aprovisionar y gestionar estos recursos de manera flexible.
        </CardText>
      </CardBody>
    </Card>
    <Card className='conteiner'>
      <CardImg className='Info2'
        alt="Card image cap"
        src={PaaS}
        top
        width={300}
        height={300}
      />
      <CardBody>
        <CardTitle tag="h5">
        PaaS
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Plataforma como servicio
        </CardSubtitle>
        <CardText>
        En un modelo PaaS, el proveedor de la nube ofrece una plataforma de desarrollo y ejecución de aplicaciones que incluye herramientas, middleware y servicios para facilitar el desarrollo, la implementación y la gestión de aplicaciones.
        </CardText>
      </CardBody>
    </Card>
    <Card className='conteiner'>
      <CardImg className='Info2'
        alt="Card image cap"
        src={SaaS}
        top
        width={300}
        height={300}
      />
      <CardBody>
        <CardTitle tag="h5">
        SaaS
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Software como servicio 
        </CardSubtitle>
        <CardText>
        En el modelo SaaS, los usuarios acceden a aplicaciones y software alojados en la nube a través de Internet. No tienen que preocuparse por la gestión de la infraestructura ni por las actualizaciones del software, ya que todo esto lo maneja el proveedor de la nube.
        </CardText>
      </CardBody>
    </Card>
  </CardGroup>
  )
}
