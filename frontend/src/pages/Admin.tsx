import { useState } from "react";
import { Link } from "react-router-dom";
import { Producto } from "../interfaces";

const Admin = () => {
    const [product, setProduct] = useState<Producto>({
        productName: '',
        productImg: null,
        productDescription: '',
        productDescriptionSimple: '',
        price: 0,
    })

    return (
        <div>
            <div className="relative h-5">
                <Link to={""} className=" absolute  right-0 mt-9 mr-2  text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Agregar producto</Link>
            </div>
            <div className="mt-16 overflow-x-auto shadow-md sm:rounded-lg border-y-2  border-black ">
                <table className="w-full text-sm text-center  text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-primarioUno border-b-2  border-gray-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                descripcion simble
                            </th>
                            <th scope="col" className="px-6 py-3">
                                descripcion general
                            </th>
                            <th scope="col" className="px-6 py-3">
                                valor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-primarioDos border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-32 p-4">
                                <img src="./public/sirenita.png" alt="Apple Watch" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Piñata de la sirenita
                            </td>
                            <td className="px-6 py-4">
                                Basada en la sirenita
                            </td>
                            <td className="px-6 py-4">
                                -Esta piñata esta compuesta de materiales como: Papel crepe, fomi escarchado, cartón cartulina.
                                -Medidas: 45 cm de alto, 45cm de acho para capacidad de un relleno.
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $20.000
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-red-500 hover:underline">Editar</a>
                                <th></th>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="fixed top-6 left-6 group mt-[120px]  ">
                <Link to={"/"} className=" text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none">Volver</Link>
            </div>
            <div className="flex items-center justify-center " >
                <div className=" border-4 border-black  max-w-screen-lg md:w-[4  00px] lg:w-[1500px] bg-primarioDos rounded-lg shadow-2xl  ">
                    <div className="py-10 px-10">
                        <div className="flex justify-between">
                            <h1 className="text-3xl mt-3 mb-5 text-center">Crear Producto.</h1>
                            <svg className="h-9 w-9 text-red-500  " fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <form>
                            <div className="flex flex-col gap-4 xl:flex-row">
                                <div className="xl:w-1/2 ">
                                    <label htmlFor="nameProduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el nombre del prodcuto</label>
                                    <input value={product.productName} type="string" id="nameProduct" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="xl:w-1/2">
                                    <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion simble</label>
                                    <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 xl:flex-row">
                                <div className="w-full">
                                    <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el valor</label>
                                    <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="productImg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la imgen del producto</label>
                                    <input value={product.productImg} type="file" id="productImg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion</label>
                                <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mt-5 grid  gap-4">
                                <button type="button" className="text-white bg-primarioUno hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 ml-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center  " >
                <div className="border-4  border-black  max-w-screen-lg md:w-[4  00px] lg:w-[1500px] bg-primarioDos rounded-lg shadow-2xl dark:border  xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="py-10 px-10">
                        <div className="flex justify-between">
                            <h1 className="text-3xl mt-3 mb-5 text-center">Actualizar Producto.</h1>
                            <svg className="h-9 w-9 text-red-500 flex" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <form>
                        <div className="flex flex-col gap-4 xl:flex-row">
                                <div className="xl:w-1/2 ">
                                    <label htmlFor="nameProduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el nombre del prodcuto</label>
                                    <input value={product.productName} type="string" id="nameProduct" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="xl:w-1/2">
                                    <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion simble</label>
                                    <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 xl:flex-row">
                                <div className="w-full">
                                    <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese el valor</label>
                                    <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="productImg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la imgen del producto</label>
                                    <input value={product.productImg} type="file" id="productImg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor="Apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese la descripcion</label>
                                <input type="Apellidos" id="Apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mt-5 grid  gap-4">
                                <button type="button" className="text-white bg-primarioUno hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 ml-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Admin