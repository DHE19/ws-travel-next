import {ClockIcon} from '@heroicons/react/24/outline'
const CardFeatures = ({dias,precio, puntuaje, lugar,imagen}) => {
    return (
        <div className="card rounded-lg shadow-lg shadow-gray-300 relative ">
            <div className=' absolute text-white bg-yellow-400 p-2 rounded-lg left-3 top-3'>
                <ClockIcon className="h-8 w-8 mx-auto"/>
                <span>{dias} Days</span>
            </div>
            <img src={imagen}  />
            <div className="p-4">
                <span className="bg-sky-500 px-2 py-1 mx-2  text-white text-sm rounded-lg">Desde: ${precio}.00</span>
                <span className="bg-orange-400 px-2 py-1 mx-2  text-white text-sm rounded-lg">{puntuaje}</span>
                <p className="text-sm py-4 text-slate-600 font-semibold cursor-pointer hover:text-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus voluptate unde nesciunt.</p>
                <span className="text-sm text-gray-500">{lugar}</span>
            </div>
        </div>
    )
}

export default CardFeatures
