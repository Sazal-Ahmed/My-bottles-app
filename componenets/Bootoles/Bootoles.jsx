import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css';


const Bootoles = () => {

    const [bottles, setBootoles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bootles.json')
        .then(res => res.json())
        .then(data => setBootoles(data))
    },[]);

    const handleBottle = bottle =>{
        const Newcart = [...cart, bottle];
        setCart(Newcart);
    }

    return (
        <div>
            <h2>Bottles Here {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
           <div className="bottles-container">
           {
                bottles.map(bottle => <Bottle
                handleBottle={handleBottle}
                key={bottle.id}
                bottle={bottle}
                ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bootoles;