import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './slices'
import reportWebVitals from './reportWebVitals'

const store = configureStore({ reducer: rootReducer })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
