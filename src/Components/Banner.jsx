import { Link } from 'react-router-dom';
import BannerImg from '../assets/To_Kill_a_Mockingbird.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-96px)] bg-base-200 mt-24 rounded-xl ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-sm' src={BannerImg} alt="" />
                <div className="max-w-xl space-y-6">
                    <h1 className="text-3xl md:text-6xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link className="btn bg-[#23BE0A] text-white">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;