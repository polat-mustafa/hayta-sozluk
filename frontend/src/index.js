import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.min.css';
import { ChakraProvider } from '@chakra-ui/react';

// redux
import { Provider } from "react-redux";
import { store } from "./features/index";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </Provider>
);
