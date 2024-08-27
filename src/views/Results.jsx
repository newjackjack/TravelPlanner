import React from 'react'
import { useState, useEffect} from 'react';
import { useAppContext } from "../libs/context";
import Plan from "../components/Plan"
import Day1_Itinerary from "../assets/Day1_Itinerary.jpg"
import Loading from "../components/Loading"
import Heading from "./Heading"
const Results = (props) => {
    const { travelPlan } = useAppContext();
    // console.log("travelPlan", travelPlan)
    //------------------------ State Variable -------------------------//
    const [selection, setSelection] = useState(0)
    if(!travelPlan) return <Loading />
  return (
    <div>
        <Heading />
        <div className='top'>
            <label htmlFor="day"className='selection_lb'>Day:</label>
            <select name="day" id="day" onChange={(e)=> setSelection(e.target.value)} value={selection} className='selection'>
                {
                    travelPlan.map((day,i)=>{
                        return <option value={i} key={i}>{i+1}</option>
                    })
                }
            </select>
        </div>
        <div className="main">
            <div className='left'>
                <h3>Travel Plan suggestion of Day {+selection + 1}</h3>
                {/* <p>{travelPlan[selection][`Day${selection + 1}`].itinerary}</p> */}
                <Plan selection={selection} />
            </div>
            <div className='right'>
                <h3>Google map</h3>
                <img src={Day1_Itinerary} alt="picture of map lists" className="img"/>
            </div>
        </div>

    </div>
  )
}

export default Results