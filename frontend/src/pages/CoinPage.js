import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import CardCoin from "../components/CoinCard";

const CoinPage = () => {
    const [coin,setCoin] = useState({});
    const [loading,setLoading] = useState(false);
    const {id} = useParams();
    
    useEffect(()=> {
        loadCoin();
    }, [])

    const loadCoin = async () => {
        try{
            const coinInfo = await axios.get(`http://localhost:5000/coins/${id}`);
            setCoin(coinInfo.data);
            setLoading(true);
        }catch (error){
            console.log(error);
            console.log(id);
        }
    }
    return (
        <>
        { loading && <CardCoin {...coin} /> }
        </>
    )
}

export default CoinPage;