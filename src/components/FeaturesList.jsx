import {GlobeAmericasIcon} from '@heroicons/react/24/solid'

const FeaturesList = ({Icon,title}) => {
    return (
        <div className="flex gap-5 items-center mt-3">
            <div className=''>  
                <div className='h-[50px] w-[50px]  bg-sky-500 rounded-full flex items-center justify-center'>
                    <Icon className='h-10 text-white w-10'/>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-lg text-slate-800'>{title}</h3>
                <span className='text-sm text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatum?</span>
            </div>
        </div>
    )
}

export default FeaturesList
