import FeaturesList from "./FeaturesList"
import Image from "next/image"
import {GlobeAmericasIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'


const list =[
    {
        icon:GlobeAmericasIcon,
        title: 'Tour Guide'
    },
    {
        icon:CurrencyDollarIcon,
        title: 'Friendly Price'
    },
    {
        icon:ShieldCheckIcon,
        title: 'Reliable tour'
    }
]

const FeaturesTwo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-16 text-slate-900 relative my-16 ">
        <div className=" px-4 md:px-7 lg:px-14 xl:px-20 lg:h-[82vh] pb-14  flex flex-col justify-center gap-5">
            <h3 className="slogan" >Sobre Nosotros</h3>
            <h1 className="text-4xl text-center md:text-left lg:text-5xl font-bold">Explora Todos Los Tours Con Nosotros</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquam illum ratione error hic ipsa consequatur accusamus nihil adipisci, fuga placeat ipsam dolore?</p>

            {
                list.map(i =>
                    <FeaturesList 
                    key={i.title}
                    Icon={i.icon}
                    title={i.title}/>
                    )
                }
        </div>
        <div  className="">
            <div className="flex justify-center ">
                <Image src={'/assets/images/about-banner.png'} width={686 /1.5} height={812 /1.5}/>
            </div>
        </div>
    </div>
    )
}

export default FeaturesTwo
