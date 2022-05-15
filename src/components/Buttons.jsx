import React from 'react';
import {Button} from '@mui/material'
// import axios from 'axios';

const getBestReturns = async () => {
    console.log("Fetching best 7 day returns");

    // const url = 'https://locahost.com/returns'
    // const options = {
    //     method: 'POST'
    // }
    // const response = await axios.get(url,options)
    //         .then((response ) =>  {
    //             console.log(response);
    //         });
}

function getBestDeviation(){
    console.log("Fetching best Standard deviation returns"); 
}

function Buttons(props) {
    return (
        <div>
            <div className='note'>
                <p>
                    Top 10 fund based on the returns of last 7 days
                </p>
                <Button variant="contained" onClick={getBestReturns}>Search</Button>
            </div>
            <div className='note'>
                <p>
                    Top 10 fund based on highest standard deviation
                </p>
                <Button variant="contained" onClick={getBestDeviation}>Search</Button>
            </div>
        </div>
    );
}

export default Buttons;