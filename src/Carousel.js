import './App.css'
import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import MicrosoftAzure from './imagenes/MicrosoftAzure.jpg'
import AWS from './imagenes/AWS.jpg'
import GoogleCloud from './imagenes/GoogleCloud.jpg'

export default class Carousel extends Component {
  render() {
    return (
        <UncontrolledCarousel className='info3'
        items={[
          {

            key: 1,
            src: MicrosoftAzure,
          },
          {
            key: 2,
            src: GoogleCloud,
          },
          {
            key: 3,
            src: AWS,
          }
        ]}
       />
    )
  }
}
