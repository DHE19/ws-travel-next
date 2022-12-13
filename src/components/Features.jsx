import CardFeatures from './CardFeatures'


const tours=[
    {
        dias:12,
        lugar:'Las Roca',
        precion:1200,
        puntuaje:4.9,
        imagen:'assets/images/popular-1.jpg'
    }, {
        dias:6,
        lugar:'Los Pozitos',
        precion:800,
        puntuaje:3.7,
        imagen:'assets/images/popular-2.jpg'
    }, {
        dias:8,
        lugar:'Cancun',
        precion:400,
        puntuaje:4.2,
        imagen:'assets/images/popular-3.jpg'
    }
]

const Features = () => {
    return (
        <div className='container mx-auto my-16'>
           <div className="text-center mb-8">
                <h2 className="courgetter text-2xl md:text-3xl text-orange-400 ">Lo Mas Demandado</h2>
                <h1 className=" text-3xl md:text-4xl text-center lg:text-5xl font-bold">Tours Populares</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10'>

                {
                    tours.map(i =><CardFeatures
                    key={i.lugar}
                    lugar={i.lugar}
                    precio={i.precion}
                    dias={i.dias}
                    puntuaje={i.puntuaje}
                    imagen={i.imagen}
                    />)
                }
            </div>
        </div>  
    )
}

export default Features
