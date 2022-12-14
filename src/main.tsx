import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleTrackPage from './components/SingleTrackPage/SingleTrackPage'
import SingleArtistPage from './components/SingleArtistPage/SingleArtistPage'
import SingleAlbumPage from './components/SingleAlbumPage/SingleAlbumPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>} path='/'/>
          <Route element={<SingleTrackPage/>} path="/track/:id"/>
          <Route element={<SingleArtistPage/>} path="/artist/:id"/>
          <Route element={<SingleAlbumPage/>} path="/album/:id"/>
        </Routes>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
