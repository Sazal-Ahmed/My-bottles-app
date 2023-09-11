import './bottle.css';
const Bottle = ({bottle}) => {

    const {name, price, img} = bottle;

    return (
        <div className="bottle">
             <p>Name: {name}</p>
            <img src={img} alt="" />
            <p><small>Price $ {price}</small></p>
            
        </div>
    );
};

export default Bottle;