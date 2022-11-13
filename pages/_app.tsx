import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import BackgroundImage from '../public/backgroundCity.jpg'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Image src={BackgroundImage} alt='background' fill/>
  <Component {...pageProps}/>
  </>
}
