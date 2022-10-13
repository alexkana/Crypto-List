import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/markets', async (req,res) => {

    try{
    const apiRes = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    const finalRes =  apiRes.data.map(function(v) {
            return {
                id: v.id,
                name:v.name,
                symbol:v.symbol,
                current_price: v.current_price,
                high_24h: v.high_24h,
                low_24h: v.low_24h,
                price_change_24h: v.price_change_24h
            }
        })
    
    res.status(200).json(finalRes);
    }catch (error) {
        res.status(500).json(error);
    }

})

router.get('/:id', async (req,res) =>{
    try{
    const coinId = req.params.id;
    const apiRes = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?market_data=true`);
    const fields = ["name", "description", "current_price", "market_data", "high_24h", "low_24h", "price_change_percentage_24h", 
    "price_change_percentage_7d", "price_change_percentage_14d", "price_change_percentage_30d", "price_change_percentage_60d", "price_change_percentage_200d",
    "price_change_percentage_1y"]
    var keys = Object.keys(apiRes.data);
    for(var i = 0; i < keys.length; i++)
       if (fields.indexOf(keys[i]) < 0)
           delete apiRes.data[keys[i]];
    
    
    res.status(200).json(apiRes.data);

    }catch(error){
        res.status(500).json(error);
    
    }
    
}) 

export default router;