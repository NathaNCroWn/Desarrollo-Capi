import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <div className="fixed top-6 left-6 group mt-[120px] ">
                <Link to={"/"} className=" text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none">Volver</Link>
            </div>
            <div className=" flex items-center justify-center h-[86vh]  " >
                <div className="grid  grid-cols-2 md:grid-cols-3 gap-3 border-4  border-black  max-w-screen-lg md:w-[4  00px] lg:w-[1500px] bg-primarioDos rounded-lg shadow-2xl dark:border  xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                    <div>
                        <h1 className="text-3xl mt-3 mr-3 ml-3 md-3">Crear Producto.</h1>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el nombre del prodcuto</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la imgen del producto</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion simble</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el valor</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-5 grid  gap-4">
                        <button type="button" className="text-white bg-primarioUno hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 ml-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl mt-3 mr-3 ml-3 md-3">Actualizar Producto.</h1>
                        <div className="mt-3 mr-3 ml-3 md'3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la id del prodcuto</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el nombre del prodcuto</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la imgen del producto</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion simble</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el valor</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-5 grid  gap-4">
                        <button type="button" className="text-white bg-primarioUno hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 ml-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar</button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl mt-3 mr-3 ml-3 md-3">Borrar Producto.</h1>
                        <div className="mt-3 mr-3 ml-3 md-3">
                            <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el nombre del producto</label>
                            <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-5 grid gap-4">
                        <button type="button" className="text-white bg-primarioUno hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 ml-6 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Admin