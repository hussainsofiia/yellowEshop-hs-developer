import '../styles/globals.css'
import {Provider as ReduxProvider} from "react-redux";
import store from "../reduxStore/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function MyApp ({ Component, pageProps }) {
  return (
    
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
      </ReduxProvider>
    
  )
}



