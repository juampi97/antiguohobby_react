import React from 'react'
import BannerContainer from "../components/banner/BannerContainer";

const Servicios = () => {

  const sourceImg = '/images/servicio/main.jpg'
  const heighBanner = '85vh'
  const title = 'NUESTROS PLANES'
  const subtitle = 'Conoce los precios para diseñar tu sitio web'


  return (
    <BannerContainer sourceImg={sourceImg} heighBanner={heighBanner} title={title} subtitle={subtitle}/>
  )
}

export default Servicios