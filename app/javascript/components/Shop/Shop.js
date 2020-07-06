import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
   margin-left: auto;
   margin-right: auto;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
   background: #fff;
   height: 100vh;
   overflow: scroll;

   &: last-child {
      background: #000;
   }
`
const Main = styled.div`
   padding-left: 50px;
`

const Shop = (props) => {
   const [shop, setShop] = useState({})
   const [review, setReview] = useState({})
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      const slug = props.match.params.slug
      const url = `/api/v1/shops/${slug}`

      axios.get(url)
      .then( resp => {
         setShop(resp.data)
         setLoaded(true)
      })
      .catch( resp => console.log(resp) )
   }, [])

   const handleChange = (e) => {
      e.preventDefault()

      setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

      console.log('review:', review)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const csrfToken = document.querySelector('[name=csrf-token]').content
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
      
      const shop_id = shop.data.id
      axios.post('/api/v1/reviews', {review, shop_id})
      .then(resp => {
         const included = [...shop.included, resp.data]
         setShop({...shop, included})
         setReview({title: '', description: '', score: 0})
      })
      .catch(resp => {

      })
   }

   const setRating = (score, e) => {
      e.preventDefault()

      setReview({...review, score})
   }

   return (
      <Wrapper>
         {
            loaded &&
            <Fragment>
               <Column>
                  <Main>
                     <Header
                        attributes={shop.data.attributes}
                        reviews={shop.included}
                     />
                     <div className="reviews"></div>
                  </Main>
               </Column>
               <Column>
                  <ReviewForm
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}
                     setRating={setRating}
                     attributes={shop.data.attributes}
                     review={review}
                  />
               </Column>
            </Fragment>
         }
      </Wrapper>
   )
}

export default Shop