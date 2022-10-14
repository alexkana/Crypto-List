import { useState,useEffect } from "react"
import axios from 'axios'
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import {StyledButton} from "../components/styles/Button.styled";


const Home = () => {
    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(10);

    const loadMore = () => {
        setCurrentPage(currentPage => currentPage + 1);
    }

    useEffect(()=> {
        loadCoins();
    }, [currentPage])

    const loadCoins = async () =>{
        try{
            const coinList = await axios.get(`http://localhost:5000/coins/markets?currentPage=${currentPage}&postsPerPage=${postsPerPage}`);
            setCoins([...coins, ...coinList.data]);
            setLoading(true);
        }catch (error){
            console.log(error);
        }
    }


    return (
        <>
        { loading && 
        coins.map(element => (<Card {...element} />)) }
        <StyledButton onClick={loadMore}>Load More</StyledButton>


        </>
    )

}

export default Home;

