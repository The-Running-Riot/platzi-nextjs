import React, { useEffect, useState } from 'react'


const HomePage = () => {

  const[productList, setProductList]= useState<TProduct[]>([])

  useEffect(() => {
    window
    .fetch('/api/avo')
    .then(response=> response.json())
    .then(({data,lenght})=>{  //desestructurar e objeto que se recibe, en data y length
      setProductList(data)
    })
  }, [])
  

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product)=>(
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage

//Giancarlalo