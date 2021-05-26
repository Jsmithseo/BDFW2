import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/main.scss";
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


function App({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-PFNVJ6C' });

}, []); 
return <Component {...pageProps} />;
}

export default App;
