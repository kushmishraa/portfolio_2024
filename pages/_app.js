import Head from "next/head";
import React from "react";

import './app.scss';

const App = ({Component , pageProps}) =>{
    return(
        <>
        <Head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Indie+Flower&family=Lobster&family=Rubik+Bubbles&display=swap')
        </style>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Indie+Flower&family=Lobster&family=Rubik+Bubbles&display=swap')
        </style>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
        </style>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
        </style>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nothing+You+Could+Do&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
        </style>
        </Head>
        <Component {...pageProps} />
        </>
    )
}

export default App;