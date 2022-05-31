import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import user from '../assets/img/user.png'

const Home: NextPage = () => {
  return (
    <nav className='w-full flex justify-around bg-neutral-850 text-white mx-auto h-14'>
      <div className='flex items-center'>
        <a className='px-6' href="">
          <svg className="fill-orange-550 w-40 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 24" data-t="crunchyroll-horizontal-beta-svg" aria-labelledby="crunchyroll-horizontal-beta-svg" aria-hidden="false" role="img">
            <title id="crunchyroll-horizontal-beta-svg">Logo de Crunchyroll</title>
            <path d="M34 12.739c0-3.761 1.882-5.845 5.293-5.845 1.188 0 2.265.249 3.23.634v2.265a7.265 7.265 0 0 0-2.78-.542c-1.885 0-3.05.566-3.05 3.488 0 2.9 1.165 3.49 3.05 3.49 1.029 0 1.949-.226 2.78-.565v2.265a8.661 8.661 0 0 1-3.23.634c-3.41 0-5.293-2.06-5.293-5.824zm26.212.884V7.074h2.64v6.185c0 3.33-1.102 5.302-4.928 5.302-3.836 0-4.906-1.971-4.906-5.302V7.074h2.638v6.55c0 1.811.655 2.43 2.268 2.43 1.633 0 2.288-.619 2.288-2.43zm25.051 2.049v2.267a8.668 8.668 0 0 1-3.233.636c-3.41 0-5.299-2.064-5.299-5.83 0-3.764 1.89-5.851 5.299-5.851 1.192 0 2.27.249 3.233.634v2.268a7.264 7.264 0 0 0-2.784-.543c-1.883 0-3.052.567-3.052 3.492 0 2.903 1.169 3.493 3.052 3.493a7.267 7.267 0 0 0 2.784-.566zM47.832 9.91v8.426h-2.68V8.34c0-1.684 5.807-1.447 5.807-1.447V9.24c-1.495.024-3.127.003-3.127.67zm44.755-3.016c3.102 0 4.934 1.737 4.934 4.67v6.772h-2.658V11.34c0-.994-.224-2.055-2.726-2.055-.735 0-1.339.136-1.785.339v8.712h-2.679V2.786h2.679v4.491c.624-.248 1.363-.383 2.235-.383zm11.789 8.034l2.456-7.854h2.836l-4.244 11.531-1.623 4.18h-2.802c2.034-5.034 1.895-4.64 2.034-5.037L99.04 7.074h2.834l2.503 7.854zm7.143-6.587c0-1.69 5.825-1.447 5.825-1.447V9.24c-1.495.024-3.141.003-3.141.663v8.433h-2.684V8.34zm12.238-1.424c3.406 0 5.29 2.06 5.29 5.822s-1.884 5.822-5.29 5.822c-3.41 0-5.292-2.06-5.292-5.822 0-3.761 1.882-5.822 5.292-5.822zm0 9.4c1.59 0 2.601-.588 2.601-3.578 0-2.99-1.01-3.58-2.6-3.58-1.595 0-2.604.59-2.604 3.58s1.009 3.579 2.603 3.579zm7.589 2.019V2.786h2.682v15.55h-2.682zm5.808 0V2.786h2.68v15.55h-2.68zM70.397 6.886c3.036 0 4.588 1.255 4.588 4.389v7.053h-2.602v-6.995c0-.992.047-2.037-2.336-2.037-.742 0-2.097.097-2.097.577v8.455h-2.62V9.011c0-1.874 2.292-2.124 5.067-2.124zm-47.272 7.028a3.8 3.8 0 0 0 3.039-1.516 8.357 8.357 0 0 1-8.217 9.889 8.357 8.357 0 0 1-8.357-8.358 8.357 8.357 0 0 1 12.243-7.4 3.806 3.806 0 0 0 1.292 7.385zM15.892 0c6.569 0 11.893 5.325 11.893 11.892 0 .236-.007.469-.02.7-.376-5.43-4.9-9.72-10.427-9.72-5.773 0-10.454 4.68-10.454 10.453 0 5.56 4.34 10.103 9.817 10.433-.267.018-.536.027-.809.027C9.325 23.785 4 18.461 4 11.892 4 5.325 9.325 0 15.892 0z"></path>
            <path className="fill-neutral-500" d="M147.827 8.85c.24 0 .438-.03.593-.088a.996.996 0 0 0 .373-.232.795.795 0 0 0 .195-.332 1.37 1.37 0 0 0 .054-.388c0-.147-.021-.278-.065-.395a.705.705 0 0 0-.21-.298.99.99 0 0 0-.377-.187 2.157 2.157 0 0 0-.572-.065h-1.276V8.85h1.285zm-1.285-4.965v1.96h.986c.21 0 .396-.017.56-.052.163-.036.3-.091.41-.168a.746.746 0 0 0 .252-.303c.058-.125.088-.275.088-.452 0-.18-.025-.333-.073-.46a.68.68 0 0 0-.222-.305.972.972 0 0 0-.38-.168 2.476 2.476 0 0 0-.546-.052h-1.075zm1.076-1.14c.486 0 .902.046 1.247.137.345.092.627.222.845.39.218.169.377.373.477.613.1.24.15.508.15.805 0 .167-.024.327-.072.48a1.43 1.43 0 0 1-.225.433 1.667 1.667 0 0 1-.392.367c-.16.11-.35.203-.57.28.493.117.858.307 1.095.57.236.263.355.605.355 1.025 0 .307-.06.592-.178.855s-.29.492-.517.685a2.442 2.442 0 0 1-.838.453 3.678 3.678 0 0 1-1.143.162h-2.81V2.745h2.576zm5.57 1.175v1.865h2.42V6.92h-2.42v1.905h3.11V10h-4.62V2.745h4.62V3.92h-3.11zm9.365.035h-2.12V10h-1.505V3.955h-2.12v-1.21h5.745v1.21zm4.734 3.29l-.785-2.22a7.131 7.131 0 0 1-.294-.92 7.668 7.668 0 0 1-.296.93l-.78 2.21h2.155zm2.52 2.755h-1.164a.513.513 0 0 1-.318-.092.56.56 0 0 1-.182-.238l-.49-1.385h-2.89l-.49 1.385a.57.57 0 0 1-.175.228.48.48 0 0 1-.316.102h-1.175l2.835-7.255h1.535l2.83 7.255z"></path>
          </svg>
          <svg className="hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 24" data-t="crunchyroll-logo-beta-svg" aria-labelledby="crunchyroll-logo-beta-svg" aria-hidden="true" role="img">
            <title id="crunchyroll-logo-beta-svg">Logo de Crunchyroll</title>
            <path d="M19.766 14.484a3.87 3.87 0 0 1-1.313-7.51A8.5 8.5 0 0 0 6 14.5a8.5 8.5 0 0 0 8.5 8.5 8.5 8.5 0 0 0 8.357-10.058 3.864 3.864 0 0 1-3.091 1.542M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c.274 0 .546-.01.815-.028C7.29 23.64 2.91 19.055 2.91 13.445c0-5.825 4.723-10.547 10.548-10.547 5.577 0 10.142 4.328 10.521 9.808.013-.234.021-.469.021-.706 0-6.627-5.373-12-12-12"></path>
            <path className="c-crunchyroll-logo-beta-svg__beta-label" d="M31.785 8.855c.24 0 .437-.03.592-.088a.996.996 0 0 0 .373-.232.795.795 0 0 0 .195-.332A1.37 1.37 0 0 0 33 7.815c0-.147-.022-.278-.065-.395a.705.705 0 0 0-.21-.298.99.99 0 0 0-.378-.187 2.157 2.157 0 0 0-.572-.065H30.5v1.985h1.285zM30.5 3.89v1.96h.985c.21 0 .397-.017.56-.052.163-.036.3-.091.41-.168a.746.746 0 0 0 .253-.303c.058-.125.087-.275.087-.452 0-.18-.024-.333-.073-.46a.68.68 0 0 0-.222-.305.972.972 0 0 0-.38-.168 2.476 2.476 0 0 0-.545-.052H30.5zm1.075-1.14c.487 0 .902.046 1.247.138.346.091.627.221.845.39.219.168.378.372.478.612.1.24.15.508.15.805 0 .167-.024.327-.073.48a1.43 1.43 0 0 1-.224.433 1.667 1.667 0 0 1-.393.367c-.16.11-.35.203-.57.28.493.117.858.307 1.095.57.237.263.355.605.355 1.025 0 .307-.06.592-.178.855s-.29.492-.517.685a2.442 2.442 0 0 1-.837.452 3.678 3.678 0 0 1-1.143.163H29V2.75h2.575zm5.57 1.175V5.79h2.42v1.135h-2.42V8.83h3.11v1.175h-4.62V2.75h4.62v1.175h-3.11zm9.365.035h-2.12v6.045h-1.505V3.96h-2.12V2.75h5.745v1.21zm4.735 3.29l-.785-2.22a7.131 7.131 0 0 1-.295-.92 7.668 7.668 0 0 1-.295.93l-.78 2.21h2.155zm2.52 2.755H52.6a.513.513 0 0 1-.318-.093.56.56 0 0 1-.182-.237l-.49-1.385h-2.89l-.49 1.385a.57.57 0 0 1-.175.227.48.48 0 0 1-.315.103h-1.175L49.4 2.75h1.535l2.83 7.255z"></path>
          </svg>
        </a>
        <div className='h-full flex'>
          <div className='h-full flex items-center px-4 cursor-pointer hover:bg-neutral-950 text-neutral-250 hover:text-white fill-neutral-250 hover:fill-white'>
            <a href="">Explorar</a>
            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img"><title id="dropdown-svg">Menú desplegable</title><path d="M7 10h10l-5 5z"></path></svg>
          </div>
          <div className='h-full flex items-center px-4 cursor-pointer hover:bg-neutral-950 text-neutral-250 hover:text-white'>
            <a href="">Manga</a>
          </div>
          <div className='h-full flex items-center px-4 cursor-pointer hover:bg-neutral-950 text-neutral-250 hover:text-white'>
            <a href="">Juegos</a>
          </div>
          <div className='h-full flex items-center px-4 cursor-pointer hover:bg-neutral-950 text-neutral-250 hover:text-white'>
            <a href="">Tienda</a>
          </div>
          <div className='h-full flex items-center px-4 cursor-pointer hover:bg-neutral-950 text-neutral-250 hover:text-white fill-neutral-250 hover:fill-white'>
            <a href="">Noticias</a>
            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img"><title id="dropdown-svg">Menú desplegable</title><path d="M7 10h10l-5 5z"></path></svg>
          </div>
        </div>
      </div>
      <div className='h-full flex'>
        <div className='h-full flex items-center px-3.5 hover:bg-neutral-950 cursor-pointer fill-neutral-250 hover:fill-white'>
          <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="search-svg" aria-labelledby="search-svg" aria-hidden="false" role="img"><title id="search-svg">Buscar</title><path d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path></svg>
        </div>
        <div className='h-full flex items-center px-3.5 hover:bg-neutral-950 cursor-pointer fill-neutral-250 hover:fill-white'>
          <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="watchlist-svg" aria-labelledby="watchlist-svg" aria-hidden="false" role="img"><title id="watchlist-svg">Mi Lista</title><path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>          
        </div>
        <div className='h-full flex items-center px-3.5 hover:bg-neutral-950 cursor-pointer fill-neutral-250 hover:fill-white'>
          <img src={user.src} alt="" className='w-9 rounded-full'/>
          <svg className="h-6 ml-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img"><title id="dropdown-svg">Menú desplegable</title><path d="M7 10h10l-5 5z"></path></svg>
        </div>
      </div>
    </nav>
  )
}

export default Home
