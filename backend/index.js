import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/** Headers */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-Width, Content-type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
        return res.status(200).json({});
    }

    next();
});

/** Check if it's ready */
app.get('/ready', (req, res, next) => {
    return res.status(200).json({ message: 'Everything is ok' });
});


/** Set up routes */
app.use('/coins', routes);

/** Port */
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));