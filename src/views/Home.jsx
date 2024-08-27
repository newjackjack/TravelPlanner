import React from 'react'
import { useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../libs/context";
import axios from 'axios';
import OpenAI from "openai";
import Heading from "./Heading"

const Home = (props) => {
    const { travelPlan, setTravelPlan } = useAppContext();
    
    const navigate = useNavigate();
    //------------------------------- State variable -------------------------------//
    // const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [day, setDay] = useState(1);
    const [style, setStyle] = useState("slow");
    // const [plan, setPlan] = useState(null)
    //------------------------------- State variable -------------------------------//

    // const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

    const getPlan = async (day, style, city) => {
        try{
            const {data} = await axios.get("http://localhost:9999/api/plans",{params:{day,style,city}})
            //data is an obj with days as keys travel itinerary as value
            //make data to array of objects
            console.log("data", data);
            const arrData = Object.keys(data).map(key=>{
                return {[key]:data[key]};
            });
            console.log("arrData",arrData);
            setTravelPlan(arrData);
            // console.log("travelPlan",travelPlan);
            // console.log("num of key-val pair of data",Object.keys(data).length);
        }
        catch{
            console.log("error");
        }
    };

    //------------------------------- Submit Handler -------------------------------//
    const submitHandler = (e) => {
        // console.log("submitbtn clicked");
        e.preventDefault();
        getPlan(day,style, city)
        // console.log(plan)
        navigate("/results")
    }
    //------------------------------- Submit Handler -------------------------------//

    return (
        <>
            <Heading />
            <form onSubmit={submitHandler} className="form">
                <div className="input">
                    <label htmlFor="city" className="label">City: </label>
                    <input type="text" name="city" id="city" className="input_area" onChange={(e) => setCity(e.target.value)} />
                </div>
                <br />
                <div className="input">
                    <label htmlFor="day" className="label">Days of Vacation: </label>
                    <input type="number" name="day" id="day" min={1} className="input_area" onChange={(e) => setDay(e.target.value)} max={7}/>
                </div>
                <br />
                <div className="input">
                    <label htmlFor="style" className="label">Style of vacation:</label>
                    <select name="style" id="style" className="input_area" onChange={(e) => setStyle(e.target.value)}>
                        <option value="slow" className="label">Slow travel</option>
                        <option value="adventure">Adventure</option>
                    </select >
                </div>
                <br />
                <button className='btn'>Submit</button>
            </form>
            {/* {JSON.stringify(travelPlan)} */}
        </>
    )

}

export default Home