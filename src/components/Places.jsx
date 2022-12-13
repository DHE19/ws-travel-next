const Places = () => {
    return (
        <div className="mt-16">
            <div className="text-center mb-8">
                <h2 className="courgetter text-2xl md:text-3xl text-orange-400 ">Destinos</h2>
                <h1 className=" text-3xl md:text-4xl text-center  lg:text-5xl font-bold">Escoge Tu Lugar</h1>
            </div>
            <div className="container mx-auto grid md:grid-cols-6  ">
                <div className=" col-span-3  mb-6 relative mx-auto w-[90%] cursor-pointer">
                    <img src="/assets/images/destination-1.jpg" className="w-full" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-slate-900 to-transparent hover:bg-slate-900 hover:opacity-70 duration-500 opacity-70 rounded-md top-0">
                            <div className="absolute bottom-10 left-10">
                                <h2 className="courgetter text-orange-300 text-2xl">Kanifushi</h2> 
                                <h1 className="text-white text-4xl">Maldivas</h1>
                            </div>
                    </div>
                </div>
                <div className=" col-span-3  mb-6 relative mx-auto w-[90%] cursor-pointer">
                    <img src="/assets/images/destination-2.jpg" className="w-full" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-slate-900 to-transparent hover:bg-slate-900 hover:opacity-70 duration-500 opacity-70 rounded-md top-0">
                            <div className="absolute bottom-10 left-10">
                                <h2 className="courgetter text-orange-300 text-2xl">Kanifushi</h2> 
                                <h1 className="text-white text-4xl">Thailandia</h1>
                            </div>
                    </div>
                </div>
                <div className=" col-span-2  mb-6 relative mx-auto w-[90%] cursor-pointer">
                    <img src="/assets/images/destination-3.jpg" className="w-full" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-slate-900 to-transparent hover:bg-slate-900 hover:opacity-70 duration-500 opacity-70 rounded-md top-0">
                            <div className="absolute bottom-5 left-5">
                                <h2 className="courgetter text-orange-300 text-xl">Kanifushi</h2> 
                                <h1 className="text-white text-2xl">Malasya</h1>
                            </div>
                    </div>
                </div>
                <div className="col-span-2 mb-6 relative mx-auto w-[90%] cursor-pointer">
                    <img src="/assets/images/destination-4.jpg" className="w-full" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-slate-900 to-transparent hover:bg-slate-900 hover:opacity-70 duration-500 opacity-70 rounded-md top-0">
                            <div className="absolute bottom-5 left-5">
                                <h2 className="courgetter text-orange-300 text-xl">Kanifushi</h2> 
                                <h1 className="text-white text-2xl">Nepal</h1>
                            </div>
                    </div>
                </div>
                <div className="col-span-2 mb-6 relative mx-auto w-[90%] cursor-pointer">
                    <img src="/assets/images/destination-5.jpg" className="w-full" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-slate-900 to-transparent hover:bg-slate-900 hover:opacity-70 duration-500 opacity-70 rounded-md top-0">
                            <div className="absolute bottom-5 left-5">
                                <h2 className="courgetter text-orange-300 text-xl">Kanifushi</h2> 
                                <h1 className="text-white text-2xl">Indonesia</h1>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Places
