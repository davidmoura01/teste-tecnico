import ImgLogo from '../assets/logo.svg'
import ImgBusca from '../assets/busca.svg'
import ImgLupa from '../assets/Lupa.svg'
import Imgheroi from '../assets/heroi.svg'
import Imgbarrinhaleft from '../assets/barrinha-branca-direita.svg'
import ImgHeart from '../assets/coracao-preenchido.svg'

import { useEffect } from 'react'

import Characters from '../characters'

import { H1, 
  ImageLogo,
  P, 
  ImageBusca, 
  ImageLupa, 
  Span1, 
  OrdenarHerois, 
  BonecoHeroi, 
  BarrinhaLeft, 
  CoracaoPreenchido,
  SomenteFavoritos } from './styles'




function Home() {

  

  return (

    <>
      <ImageLogo src={ImgLogo} alt="logo" />
      <H1>EXPLORE O UNIVERSO</H1>
      <P>Mergulhe no dominio deslumbrante de todos os 
        personagens clássicos que você ama - e queles que você descobrirá em breve</P>
      <ImageBusca src={ImgBusca} alt="barra-de-busca" />
      <ImageLupa src={ImgLupa} alt="Lupa" />

      <Span1>Encontrados 20 heróis</Span1>

      
        <BonecoHeroi src={Imgheroi} alt="heroi" />
        <OrdenarHerois>Ordenar por nome - A/Z</OrdenarHerois>

        <BarrinhaLeft src={Imgbarrinhaleft} alt="barrinha-direita" />

        <CoracaoPreenchido src={ImgHeart} alt="coração-preenchido" />

        <SomenteFavoritos>Somente Favoritos</SomenteFavoritos>

        
        <Characters />
      

    </>




  )
}

export default Home
