import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdvertPage } from './pages/AdvertPage'
import { AdvertsListPage } from './pages/AdvertsListPage'
import { AdvertCreationPage } from './pages/AdvertCreationPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegisterPage } from './pages/RegisterPage'
import { SignInPage } from './pages/SignInPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NotFoundPage } from './pages/NotFoundPage'
import './styling/app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/adverts" component={AdvertsListPage} />
          <Route exact path="/adverts/:advertId" component={AdvertPage} />
          <Route exact path="/create-ad" component={AdvertCreationPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
