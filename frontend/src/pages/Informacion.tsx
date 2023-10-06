import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Informacion = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2   ">
            <div className="mt-[80px] ml-[350px] ">
                <img src="./public/capiñatasLogo2.png" className=" object-center h-100 scale-150" />
                <h1 className=" mt-[50px] text-4xl font-semibold  md:hover:bg-transparent md:hover:text-primarioUno">Nuestras redes sociales.</h1>
                <div className="m-8 flex mt-[40px] grid-cols-2 ms:grid-cols-1 gap-1">
                    <Link to={"https://www.instagram.com/"} className="md:hover:bg-transparent md:hover:text-primarioUno">< BsInstagram size={"100px"} /></Link>
                    <Link to={"https://www.facebook.com/"} className="md:hover:bg-transparent md:hover:text-primarioUno">< BsFacebook size={"100px"} /></Link>
                    <Link to={"https://web.whatsapp.com/"} className="md:hover:bg-transparent md:hover:text-primarioUno">< BsWhatsapp size={"100px"} /></Link>
                </div>
            </div>
            <div className=" max-w-[800px] bg-primarioDos text-justify mt-[50px] mb-[50px]">
                <h1 className="text-4xl font-semibold tracking-widest bg-primarioDos  w-fix " >TALLER DE ELABORACION DE PIÑATAS</h1>
                <p className="font-extralight text-3xl tracking-widest bg-primarioDos w-fix ">Somos un emprendimiento de piñatas nuevo en el
                    mercado el cual dispone de una variedad de piñatas de
                    excelente calidad de los motivos que desee, estas son
                    elaboradas de la manera mas similar y acorde a lo exigido
                    por el cliente.<br />
                    <br />
                    Gracias al cumplimiento de las exigencias del cliente con
                    los productos ganamos una excelente reputación que a
                    estado creciendo puesto que nuestros clientes al quedar
                    satisfechos con nuestros productos tienden a volver e
                    incluso aconsejan a otras personas de adquirir nuestros
                    productos.<br />
                    <br />
                    Pueden contactarnos mediante las redes sociales si desea
                    realizar alguna cotización o visualizar mas de nuestro
                    trabajo.
                </p>
            </div>
        </div>
    );
};
export default Informacion