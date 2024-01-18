import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { CustomHooks } from '../contexts/Context';
import Loader from '../components/Loader';

const WatchPage: React.FC = () => {
    const { Loading, SetLoading }:any = CustomHooks()
    const { title, id } = useParams();
    if(id){
    //  @ts-ignore 
        SetLoading(false)
    }else{SetLoading(true)}
    let link: string = `https://www.2embed.cc/embed/`;
    let newurl = link + id?.split(' ').join("");
    return (
        <>
            {Loading ? <Loader /> : <div className='watchpage'>
                <div className="det">
                    <h1>
                        <Link to={'/'}>
                            <IoIosArrowRoundForward className="rotate-180" />
                        </Link>
                        <strong>{title}</strong>
                    </h1>
                </div>
                <iframe src={newurl} allowFullScreen className='videoplayer'></iframe>
            </div>}
        </>
    );
};

export default WatchPage;
