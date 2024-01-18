import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

interface Props { }
    //  @ts-ignore 
const WatchTv = (props: Props) => {
    const { channelId } = useParams();
    const [streamingLink, setStreamingLink] = useState<string | null>(null);

    useEffect(() => {
        // Function to get streaming link for a channel (using streams endpoint)
        const getStreamingLink = async (channelId: any) => {
            const streamsUrl = 'https://iptv-org.github.io/api/streams.json';

            try {
                // Fetch streams data
                const response = await fetch(streamsUrl);
                const streamsData = await response.json();
                // console.log(streamsData)
                const channelStream = streamsData.find((stream: any) => stream.channel === channelId);
                return channelStream ? channelStream.url : channelStream ;
            } catch (error) {
                console.error('Error fetching streams data:', error);
                return null;
            }
        }
        const res = async () => {
            const a = await getStreamingLink(channelId);
            // console.log(`Streaming Link: ${a}`);
            setStreamingLink(a)
        }
        res();
        console.log(channelId)
    }, [channelId])

    return (
        <div>
            <h1>Watch TV Channel</h1>
                <ReactPlayer url={streamingLink || "http://112.25.48.68/live/program/live/qjshd/4000000/mnf.m3u8"} controls width="100%" height="auto" />
        </div>
    );
};

export default WatchTv;

// const allCategories = Array.from(new Set(indianChannels.flatMap((channel) => channel.categories)));
// // const sportsind = data.filter((channel) => channel.country === 'IN');
// // const sports = sportsind.filter((chan)=>chan.categories.includes('sports'));
// // Process the data as needed
// // console.log(indianChannels);
// console.log(indianChannels);

// // For example, to get the name and streaming link of the first Indian channel
// const firstIndianChannel = indianChannels[0];
// if (firstIndianChannel) {
//     const streamingLink = await getStreamingLink(firstIndianChannel.id); // Use await to get the resolved value
//     console.log(`Channel Name: ${channelName}`);
//     console.log(`Streaming Link: ${streamingLink}`);
// }    