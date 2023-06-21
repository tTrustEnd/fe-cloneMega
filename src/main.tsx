import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {persistor, store} from '../src/redux/store.tsx'
import { Provider } from 'react-redux'  
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.css';
import "react-image-gallery/styles/css/image-gallery.css";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <App />
       </PersistGate>
  </Provider>,
)
