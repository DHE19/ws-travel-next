import {} from '@heroicons/react/24/solid'
const Footer = () => {
    return (
        <div className="bg-slate-800 py-10 ">
            <div className="container mx-auto text-white flex justify-around  px-1 flex-wrap gap-10">
                <div>
                    <h2 className="text-lg font-semibold">Categorías</h2>
                    <ul className="text-sm font-light text-slate-200 ">
                        <li className="cursor-pointer">Viajes</li>
                        <li className="cursor-pointer">Estilo de vida</li>
                        <li className="cursor-pointer">Fashion</li>
                        <li className="cursor-pointer">Educación</li>
                        <li className="cursor-pointer">Comida y Bevida</li>
                    </ul>

                </div>
                <div>
                    <h2 className="text-lg font-semibold">Top Lugares</h2>
                    <ul className="text-sm font-light text-slate-200 ">
                        <li className="cursor-pointer">Indonsia, Jakarta</li>
                        <li className="cursor-pointer">Maldivas, Male</li>
                        <li className="cursor-pointer">Australia, Caberra</li>
                        <li className="cursor-pointer">Tailandia, Bangkok</li>
                        <li className="cursor-pointer">Marruecos, Rabat</li>
                    </ul>

                </div>
                <div>
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="text-sm font-light text-slate-200 ">
                        <li className="cursor-pointer">Nosotros</li>
                        <li className="cursor-pointer">Contacto</li>
                        <li className="cursor-pointer">Tours</li>
                        <li className="cursor-pointer">Reservaciones</li>
                        <li className="cursor-pointer">Terminos y condiciones</li>
                    </ul>

                </div>
                <div>
                    <h2 className="text-lg font-semibold text-center md:text-left">Suscribete</h2>
                    <p className="text-sm text-slate-200 font-light mb-4">Mantente informador con nuestro voletín diario</p>
                    <form>
                        <input type="text"
                        className="py-3 px-2 md:px-3 text-slate-500 rounded-tl-md rounded-bl-md focus:outline-none" 
                        placeholder="email"
                        />
                        <button className="button-style-four">Suscrbirse</button>
                    </form>
                </div>
            </div>
            <footer className="container mx-auto flex justify-around items-center text-white py-10">
                <h1 className='font-bold text-2xl'>TourTravel</h1>
                <span className='text-sm'>© 2022 <a href="https://github.com/DHE19" > <u> Eduardo Ruíz</u></a></span>

            </footer>
        </div>
    )
}

export default Footer
