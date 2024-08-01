import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16'>
            <h3 className='text-3xl font-medium text-gray-500'>Content Not Found</h3>
            <Link to='/' className='btn btn-outline text-green-400'>Home</Link>
        </div>
    );
};

export default ErrorPage;