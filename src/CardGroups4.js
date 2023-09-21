import React, { Component } from 'react'
import {Card, CardBody, CardTitle, CardText, CardSubtitle, CardGroup} from 'reactstrap'
import './App.css';

export default class CardGroups4 extends Component {
  render() {
    return (
        <CardGroup> 
        <Card className='conteiner'>
          <CardBody>
            <CardTitle tag="h5">
            Redes y conectividad:
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            </CardSubtitle>
            <CardText>
            Los servicios en la nube permiten la creación y gestión de redes virtuales, balanceadores de carga, VPN (Virtual Private Network) y servicios de CDN (Content Delivery Network). Esto facilita la conectividad y la distribución de contenido de manera eficiente en todo el mundo.
            </CardText>
          </CardBody>
        </Card>
        <Card className='conteiner'>
          <CardBody>
            <CardTitle tag="h5">
            Desarrollo y alojamiento de aplicaciones:
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            </CardSubtitle>
            <CardText>
            Los servicios en la nube ofrecen plataformas de desarrollo y alojamiento de aplicaciones que permiten a los desarrolladores crear, implementar y escalar aplicaciones sin preocuparse por la infraestructura subyacente. Ejemplos incluyen AWS Elastic Beanstalk, Google App Engine y Azure App Service.
            </CardText>
          </CardBody>
        </Card>
        <Card className='conteiner'>
          <CardBody>
            <CardTitle tag="h5">
            Seguridad y cumplimiento: 
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            </CardSubtitle>
            <CardText>
            Los servicios en la nube proporcionan herramientas y servicios de seguridad para proteger los datos y las aplicaciones en la nube. Esto incluye firewalls, autenticación, encriptación y cumplimiento de normativas. Los proveedores de nube suelen ofrecer servicios específicos de seguridad, como AWS Identity and Access Management (IAM) y Azure Active Directory.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    )
  }
}
