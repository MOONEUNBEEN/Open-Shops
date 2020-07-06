import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Shop from './Shop'
import styled from 'styled-components'

const Home = styled.div`
   text-align: center;
   max-width: 1200px;
   margin-left: auto;
   margin-right: auto;
`
const Header = styled.div`
   padding: 100px 100px 10px 100px;

   h1 {
      font-size: 42px;
   }
`
const Subheader = styled.div`
   font-weight: 300;
   font-size: 26px;
`
const Grid = styled.div`
   display: grid;
   grid-template-colmns: repeat(4, 1fr);
   grid-gap: 20px;
   width: 100%;
   padding: 20px;
`

const Shops = () => {
   const [shops, setShops] = useState([])

   useEffect(() => {
      axios.get('/api/v1/shops.json')
      .then( resp => setShops(resp.data.data))
      .catch( resp => console.log(resp) )
   }, [shops.length])

   const grid = shops.map( item => {
      return (
         <Shop
            key={item.attributes.name}
            attributes={item.attributes}
         />
      )
   })

   return (
      <Home>
         <Header>
            <h1>OpenShops</h1>
            <Subheader>Honest, unbiased shop reviews.</Subheader>
         </Header>
         <Grid>
           {grid}
         </Grid>
      </Home>
   )
}

export default Shops