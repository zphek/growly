import error from '../assets/error.png';

const ErrorAlert = () => {
    return (
    <div className="absolute bg-[#ff828b] top-0 flex flex-row justify-center items-center p-3 px-4 gap-4 rounded-lg">
        <img src={error} alt="" />
        <h2 className='text-lg text-white'>El usuario o contraseña ingresados son incorrectos.</h2>
    </div>
    );
}
 
export default ErrorAlert;