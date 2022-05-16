import React,{useEffect} from 'react';
import {Button} from '@mui/material'

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

    useEffect(() => {
        getPost();
      },[]);

    async function getPost(){
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode:'no-cors',
        }
        const response = await fetch('http://localhost:8080/post', options)
        if(response){
            console.log(response);
        }
        console.log("calling post data");
    }


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