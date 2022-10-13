import { useState,useEffect } from "react"
import axios from 'axios'
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Home = () => {
    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(10);

    useEffect(()=> {
        loadCoins();
    }, [])

    const loadCoins = async () =>{
        try{
            const coinList = await axios.get('http://localhost:5000/coins/markets');
            setCoins(coinList.data);
            setLoading(true);
        }catch (error){
            console.log(error);
        }
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coins.slice(firstPostIndex, lastPostIndex);

    return (
        <>
        { loading && currentPosts.map(element => (<Card {...element} />)) }
        <Pagination totalPosts={coins.length} 
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
        />
        </>
    )

}

export default Home;