import React, {useState} from 'react';

const Order = (props) => {
    const [order, setOrder] = useState(props.pizza);

    return(
        <div className="order">
            {props.pizza.map(p => (
                <div className="pizza" key={p.id}>
                    <h1>Pizza has been ordered!</h1>
                    <p>Here are the details</p>
                    <p>{p.name}</p>
                    <p>{p.size}</p>
                    <p>{p.sauce}</p>
                    <p>{p.toppings}</p>
                    <p>{p.specialInstructions}</p>
                </div>
            ))}
        </div>
    )
}