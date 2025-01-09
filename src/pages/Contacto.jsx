import React from 'react'
import BannerContainer from "../components/banner/BannerContainer";

const Contacto = () => {

  const sourceImg = '/images/contacto/main.jpg'
  const heighBanner = '60vh'
  const title = 'CANALES DE ATENCIÓN'
  const subtitle = ''


  return (
    <BannerContainer sourceImg={sourceImg} heighBanner={heighBanner} title={title} subtitle={subtitle}/>
  )
}

export default Contacto