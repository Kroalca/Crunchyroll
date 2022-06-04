import tokyo from '../assets/img/tokyo.png'

export const Header = (): JSX.Element => {
    return (
        <>
            <div className='flex justify-center mt-14 relative bg-gradient-to-r from-[#fab818] via-[#f47521] to-[#fab818] -z-10'>
                <svg className="w-164 h-400 absolute top-0 left-0 translate-y-[-33%] translate-x-[-38%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695 1610" data-t="hero-carousel-yellow-left-svg" aria-labelledby="hero-carousel-yellow-left-svg" aria-hidden="true" role="img"><title id="hero-carousel-yellow-left-svg">Diseño</title><defs><linearGradient x1="50%" y1="54.35%" x2="50%" y2="98.226%" id="hero-carousel-yellow-left-a"><stop stop-color="#FFC94D" offset="0%"></stop><stop stop-color="#FAB818" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="54.35%" x2="50%" y2="98.226%" id="hero-carousel-yellow-left-b"><stop stop-color="#FFC94D" offset="0%"></stop><stop stop-color="#FAB818" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="-5.282%" y1="0%" x2="28.057%" y2="50%" id="hero-carousel-yellow-left-c"><stop stop-color="#FFD980" offset="0%"></stop><stop stop-color="#FFC94D" offset="100%"></stop></linearGradient></defs><g stroke-width="2" fill="none"><path stroke="url(#hero-carousel-yellow-left-a)" opacity=".7" d="M1.278 1024.932l179.466-706.437" transform="translate(193 219)"></path><path stroke="url(#hero-carousel-yellow-left-b)" opacity=".7" d="M43.28 442.337L210.452 319" transform="translate(193 219)"></path><path d="M258.667 526.13c-6.426-.032-69.317-68.037-188.673-204.014" stroke="url(#hero-carousel-yellow-left-c)" opacity=".5" transform="rotate(-161 279.154 517.475)"></path></g></svg>
                <div className='py-8 flex items-center z-0'>
                    <svg className="fill-neutral-950 h-10 w-10 rotate-180 hover:bg-neutral-950 hover:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="angle-left-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Anterior</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path></svg>
                    <img className='px-10' src={ tokyo.src } alt="Tokyo revengers" />
                    <svg className="fill-neutral-950 h-10 w-10 hover:bg-neutral-950 hover:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="angle-left-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Anterior</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path></svg>
                </div>
                <svg className="w-164 h-400 absolute top-0 right-0 translate-y-[-31%] translate-x-[38%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695 1610" data-t="hero-carousel-yellow-right-svg" aria-labelledby="hero-carousel-yellow-right-svg" aria-hidden="true" role="img"><title id="hero-carousel-yellow-right-svg">Diseño</title><defs><linearGradient x1="83.74%" y1="-25.767%" x2="28.284%" y2="36.366%" id="hero-carousel-yellow-right-a"><stop stop-color="#FFF" stop-opacity="0" offset=".069%"></stop><stop stop-color="#FFF" offset="100%"></stop></linearGradient></defs><g transform="translate(-1084 219)" fill="none"><circle fill="url(#hero-carousel-yellow-right-a)" opacity=".12" cx="1848.5" cy="500.638" r="500.5"></circle><circle fill="url(#hero-carousel-yellow-right-a)" opacity=".12" cx="1706.5" cy="1133.5" r="500.5"></circle><path d="M1357.047 261.76c9.903 3.412 82.47 105.958 217.704 307.637" stroke="#FFF" stroke-width="2" opacity=".5"></path><path d="M1522.654 355.468c.515.185-49.68 162.344-150.586 486.478" stroke="#FFF" stroke-width="2" opacity=".3"></path></g></svg>
            </div>
            <div className='bg-black text-white'>
                <div className='container mx-auto py-5 px-10 flex gap-x-3 justify-center text-xs font-black'>
                    <div className='px-2 py-3 bg-neutral-850 w-40 flex items-center cursor-pointer hover:bg-neutral-700'>
                        <span>JUJUTSU KAISEN</span>
                    </div>
                    <div className='px-2 py-3 bg-neutral-850 w-40 flex items-center cursor-pointer hover:bg-neutral-700'>
                        <span>SPY X FAMILY</span>
                    </div>
                    <div className='px-2 py-3 bg-neutral-850 w-40 flex items-center cursor-pointer hover:bg-neutral-700'>
                        <span>ATTACK ON TITAN</span>
                    </div>
                    <div className='px-2 py-3 bg-neutral-850 w-40 flex items-center cursor-pointer hover:bg-neutral-700'>
                        <span>MY HERO ACADEMY 5</span>
                    </div>
                    <div className='px-2 py-3 bg-neutral-850 w-40 flex items-center cursor-pointer hover:bg-neutral-700'>
                        <span>TOKYO REVENGERS</span>
                    </div>
                </div>
            </div>
        </>
    )
}