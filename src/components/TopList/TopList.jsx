import { useState, useEffect } from "react";
import { 
    Stack, 
    HStack, 
    VStack,
    Box,
    Button 
} from '@chakra-ui/react'
import { get_all_top } from "../utils/api";

export default function TopList() {
    const [top, setTop] = useState([])
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        get_all_top().then(res => {
            setTop(res)
        })
    }, [])
    useEffect(() => {
        const songs = top.map((item, index) => 
            <Box 
                className="track-container"
                key={item.song} 
                onClick={() => window.open(item.url, '_blank')}
                borderBottom={index !== top.length - 1 ? '3px solid #A0AEC0' : 'none'}
                paddingBottom={index !== top.length - 1 ? '0.5rem' : '1rem'}
            >
                <HStack className="track">
                    <Box className="track-img">
                        <img src={item.image} alt={item.song} className='img' />
                    </Box>
                    <Box className="track-info">
                        <p>#{index+1}</p>
                        <h2>{item.song}</h2>
                        <p>{item.artist}</p>
                    </Box>
                </HStack>
            </Box>
        )
        setTracks(songs)
    }, [top])
    return(
        <div className="list-container">
            <div className="head">
                <div className="heading">
                    <h2><span className="name"><a href="https://open.spotify.com/user/31ma7274fwzhcig5iibz25thypoi?si=da7ea11fd64a4412">ashish's</a></span> top 20 songs for this month.</h2>
                    <p>A list of my top 20 most played songs on spotify update daily.</p>
                </div>
            </div>
            <VStack className="top-list">
                {tracks}
            </VStack>
        </div>
    )
}