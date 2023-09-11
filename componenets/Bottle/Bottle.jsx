import './bottle.css';
const Bottle = ({bottle, handleBottle}) => {

    const {name, price, img} = bottle;

    return (
        <div className="bottle">
             <p>Name: {name}</p>
            <img src={img} alt="" />
            <p><small>Price $ {price}</small></p>
            <button onClick={()=> handleBottle(bottle)}>Purchase</button>
            
        </div>
    );
};

export default Bottle;