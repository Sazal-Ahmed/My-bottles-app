import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css';


const Bootoles = () => {

    const [bottles, setBootoles] = useState([]);

    useEffect(()=>{
        fetch('bootles.json')
        .then(res => res.json())
        .then(data => setBootoles(data))
    },[]);

    return (
        <div>
            <h2>Bottles Here {bottles.length}</h2>
           <div className="bottles-container">
           {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bootoles;