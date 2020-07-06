import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shops from './Shops/Shops'
import Shop from './Shop/Shop'

const App = () => {
   return (
      <Switch>
         <Route exact path="/" component={Shops} />
         <Route exact path="/shops/:slug" component={Shop} />
      </Switch>
   )
}

export default App