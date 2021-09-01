import type { AppProps } from 'next/app'
import Head from 'next/head'
import {  GoogleFonts  } from "next-google-fonts" ;
import { ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from '../context'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import Btn from '../components/darkModeBtn'

import { useState } from 'react'

import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(lightTheme)

  const toogleThemes = () =>{
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
  }
  
  return (
    <>
    <GlobalContextProvider>
        <GoogleFonts  href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Fira+Code:wght@400&display=swap"/>
        <Head>
          <title>Git Repository Explore</title>
          <meta
            name="description"
            content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
          />

          <link rel="shortcut icon" href="/gitFavicon.ico" type="image/ico"/> 
        </Head>
        
        <GlobalStyles />
        <ThemeProvider theme={ theme }>
          <Btn onClick={()=>toogleThemes()}/>
          <Component {...pageProps}/>
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  )
}
export default MyApp
