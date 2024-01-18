import { FaArrowCircleRight } from 'react-icons/fa';
import { navItems } from '../types/types'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className='navbar w-40   h-screen flex flex-col text-center items-center text-cyan-50' >
                <img className="w-62 object-cover pt-3 pb-5" src="https://www.keralatv.in/media/2023/05/DisneyHotstar.png" alt="logo" />
                <span className='bg-amber-500 rounded-xl w-28 items-center gap-2 justify-center cursor-pointer font-bold flex md'>Subscribe <FaArrowCircleRight /></span>
                    {navItems.map((item) => { return <h1 key={item.label}><Link to={item.route}>{item.icon}</Link></h1> })}
            </nav>
        </div>
    );
};

export default Navbar;
