import Image from "next/image"
const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-16 text-slate-900 relative ">
            <div className=" px-4 md:px-7 lg:px-14 xl:px-20 lg:h-[82vh] pb-14  flex flex-col justify-center gap-5">
                <h3 className="slogan" >Explora tu viaje</h3>
                <h1 className="text-5xl text-center md:text-left lg:text-6xl font-bold">Una Agencia de Confiaza</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam at maxime quod ipsa nemo excepturi necessitatibus itaque dolor amet quasi!</p>
                <div className="flex justify-center md:justify-start">
                    <button className="button-style-two">Contactanos</button>
                    <button className="button-style-three">Saber Más</button>
                </div>
            </div>
            <div  className="flex justify-center items-center">
                <div className="">
                    <Image src={'/assets/images/hero-banner.png'} width={686 /1.5} height={812 /1.5}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
