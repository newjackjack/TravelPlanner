import React, { useState, useEffect } from 'react'
import { useAppContext } from "../libs/context";
import Loading from "../components/Loading"

const Plan = (props) => {
    const { travelPlan } = useAppContext();
    console.log("travelPlan", travelPlan);
    const { selection } = props;
    console.log("selection", selection);
    // console.log("travelPlan_selection", travelPlan[selection]);
    // console.log("travelPlan_selection_Day", travelPlan[selection][`Day${selection+1}`]);
    const currentDay = travelPlan[selection][`Day${+selection + 1}`]?.itinerary
    return (
        <ul className='plan'>
            {/* {`Day${+selection + 1}`} */}
            {currentDay.map((str,i) => <li key={i}>{str}</li>)}
        </ul>
    )
}

export default Plan