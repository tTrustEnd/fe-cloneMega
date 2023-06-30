import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {persistor, store} from '../src/redux/store.tsx'
import { Provider } from 'react-redux'  
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.css';
import "react-image-gallery/styles/css/image-gallery.css";
import 'video-react/dist/video-react.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <App />
       </PersistGate>
  </Provider>,
)
