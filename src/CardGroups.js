import React from 'react'
import './App.css';
import { Card,CardImg,CardGroup,CardBody,CardTitle, CardSubtitle, CardText } from 'reactstrap'
import publica from './imagenes/Publica.png'
import privada from './imagenes/Privada.jpg'
import hibrida from './imagenes/Hibrida.png'

export default function CardGroups() {
  return (
    <CardGroup>
  <Card className='conteiner'>
    <CardImg className="info"
      alt="Card image cap"
      src ={publica}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Nube pública
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        (Public Cloud)
      </CardSubtitle>
      <CardText>
      En este modelo, los proveedores de servicios en la nube ofrecen recursos informáticos, como servidores virtuales, almacenamiento y aplicaciones, a través de Internet para uso público. Estos servicios son propiedad y gestionados por terceros y están disponibles para cualquier persona que quiera utilizarlos. Ejemplos de proveedores de nubes públicas incluyen Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP).
      </CardText>
    </CardBody>
  </Card>
  <Card className='conteiner'>
    <CardImg  className="info"
      alt="Card image cap"
      src= {privada}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Nube privada
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        (Private Cloud)
      </CardSubtitle>
      <CardText>
      En una nube privada, los recursos informáticos se implementan y gestionan exclusivamente para una organización específica. Puede ser gestionada por la propia organización o por un proveedor de servicios, pero la infraestructura está dedicada a esa organización. Esto se utiliza comúnmente en organizaciones que tienen requisitos de seguridad y cumplimiento muy estrictos.
      </CardText>
    </CardBody>
  </Card>
  <Card className='conteiner'>
    <CardImg className="info"
      alt="Card image cap"
      src={hibrida}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Nube híbrida
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        (Hybrid Cloud)
      </CardSubtitle>
      <CardText>
      La nube híbrida combina múltiples modelos de implementación, como la nube pública, privada o comunitaria, en una sola infraestructura. Permite que las aplicaciones y los datos se muevan entre estas nubes según las necesidades de la organización.
      </CardText>
    </CardBody>
  </Card>
</CardGroup>
  )
}
