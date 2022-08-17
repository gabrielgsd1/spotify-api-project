import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleTrackPage from './components/SingleTrackPage/SingleTrackPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>} path='/'/>
          <Route element={<SingleTrackPage/>} path="/track/:id"/>
        </Routes>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
