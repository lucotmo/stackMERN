import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import style from './scss/main.scss'
import axios from 'axios'

window.axios=axios

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}