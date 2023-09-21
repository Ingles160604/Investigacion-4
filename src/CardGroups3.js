import React, { Component } from 'react'
import {Card, CardBody, CardTitle, CardText, CardSubtitle, CardGroup} from 'reactstrap'

export default class CardGroups3 extends Component {
  render() {
    return (
        <CardGroup>
        <Card className='conteiner'>
          <CardBody>
            <CardTitle tag="h5">
            Almacenamiento de datos:
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            </CardSubtitle>
            <CardText>
            Los servicios en la nube proporcionan almacenamiento escalable y seguro para datos y archivos. Esto incluye opciones como el almacenamiento en bloque, el almacenamiento de objetos y sistemas de archivos distribuidos. Ejemplos de servicios de almacenamiento en la nube incluyen Amazon S3, Google Cloud Storage y Microsoft Azure Blob Storage.
            </CardText>
          </CardBody>
        </Card>
        <Card className='conteiner'>
          <CardBody>
            <CardTitle tag="h5">
            Procesamiento y computación:
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            </CardSubtitle>
            <CardText>
            Los servicios en la nube ofrecen recursos de cómputo escalables, como servidores virtuales (máquinas virtuales) y contenedores, que permiten a las organizaciones ejecutar aplicaciones y cargas de trabajo de manera eficiente. Ejemplos incluyen Amazon EC2, Google Compute Engine y Azure Virtual Machines.
            </CardText>
          </CardBody>
        </Card>
        <Card className='conteiner'>
          <CardBody>
            <CardTitle tag="h5">
            Bases de datos y servicios de bases de datos: 
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            </CardSubtitle>
            <CardText>
            Los servicios en la nube proporcionan soluciones de bases de datos gestionadas que van desde bases de datos relacionales hasta bases de datos NoSQL y sistemas de administración de datos. Ejemplos incluyen Amazon RDS, Google Cloud SQL, y Azure SQL Database.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    )
  }
}
