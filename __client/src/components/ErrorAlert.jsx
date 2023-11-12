import error from '../assets/error.png';

const ErrorAlert = () => {
    return (
    <div className="absolute bg-[#ff828b] top-0 flex flex-row justify-center items-center p-3 px-4 gap-4 rounded-lg">
        <img src={error} alt="" />
        <h2 className='text-lg text-white'>Debe acceder a su perfil y completar el proceso de registro.</h2>
    </div>
    );
}
 
export default ErrorAlert;