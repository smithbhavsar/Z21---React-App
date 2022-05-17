import React,{useEffect, useState} from 'react';
import {Button} from '@mui/material'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({
    baseURL: 'https://z21-webapp.herokuapp.com/returns'
});

function Buttons(props) {

    useEffect(() => {
        getPost();
      },[]);

    async function getPost(){
        const options = {
            method: 'get',
        }
        const response = await fetch('https://z21-webapp.herokuapp.com/post', options)
        if(response){
            console.log(response);
        }
        console.log("calling post data");
    }

    const [funds,setFunds] = useState([]);
    const [active, isActive] = useState(false);

    const getBestReturns = async () => {
        console.log("Fetching best 7 day returns");

        api.get('/').then(res=>{
        //    console.log(res.data.results.data);
           setFunds(res.data.results.data);
        })
        isActive(true);
    }

    function getBestDeviation(){
        console.log("Fetching best Standard deviation returns"); 
        isActive(false);

        toast('Work In Progress!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                <ToastContainer />
            </div>
            { active === true && <div className='note'>
                <table className='table'>
                    <th>Scheme Code</th>
                    <th>Scheme Name</th>
                    <th>Net Asset Value</th>
                {funds.map(fund =>
                <tr>
                    <td className='td3'>{fund['Scheme Code']}</td>
                    <td>{fund['Scheme Name']}</td>
                    <td className='td3'>{fund['Net Asset Value']}</td>
                </tr>  
                )}
                </table>
            </div>}
        </div>
    );
}

export default Buttons;