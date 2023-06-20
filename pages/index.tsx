import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

import fetch from 'isomorphic-unfetch'; //este paquete funcionara tanto para el cliente, como para el server


//Todo lo que ocurra en la siguiente arrow function ocurrira en el lado del servidor
export const getServerSideProps= async()=>{
  const response= await fetch('https://platzi-avo.vercel.app/api/avo')
  const {data:productList}:TAPIAvoResponse = await response.json()

  return{
    props:{
      productList,
    }
  }
}

const HomePage = ({productList}:{productsList:TProduct[]}) => {


  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
