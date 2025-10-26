
import express from 'express';
import { ENV_VARS } from './config/envVars.js';

const app = express();

const PORT = ENV_VARS.PORT;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})