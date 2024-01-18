import React, { useEffect, useState } from 'react';
    //  @ts-ignore 
import { categories, Channel } from '../types/types';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
    //  @ts-ignore 
import fetchData from '../Apis/api.config';
    //  @ts-ignore 
interface Props { }
    //  @ts-ignore 
const TvChannel = (props: Props) => {

    const [ChannelList, SetChannelList] = useState<Channel[] | null>();
    //  @ts-ignore 
    const [FilterData, SetFilterData] = useState<string>();
    const apiUrl = 'https://iptv-org.github.io/api/channels.json';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const indianChannels = data.filter((channel: any) => channel.country === 'IN');
                SetChannelList(indianChannels)
            } catch (error) {
                console.error('Error fetching channel data:', error);

            };
        }

        fetchData();
    }, []);

    const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim().toLowerCase();
        const filterdata = ChannelList?.filter((channel) => channel.name.toLowerCase().includes(query));
        console.log(filterdata)
        SetChannelList(filterdata)
        if (query === "") {
            console.log("jvd")
            SetChannelList(ChannelList)
            console.log(ChannelList)
        }
    };

    return (
        <>
            <div className="tv_channel">
                <div className="search_tv">
                    <h1>Tv-Channels</h1>
                    <div className="searchbar">
                        <input type="text" placeholder='Search Tv Channel' onChange={HandleSearch} />
                        <button >
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="channel_list">
                    {ChannelList?.map((val) => {
                        return <div className="channel_card">
                            <Link to={`/tv/channel/${val?.id}`}>
                                <img src={val?.logo} alt={val?.id} className='channellogo' />
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
};

export default TvChannel;
