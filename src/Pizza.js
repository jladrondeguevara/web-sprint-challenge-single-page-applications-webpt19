import React, {useState, useEffect} from "react";
import * as yup from 'yup';


export default function Pizza () {
    const [pizzaState, setPizzaState] = useState({
        name: "",
        size: "",
        toppings: ""
    });

    return (
        <div className="pizza-form">
            <form>
                <h1>Build your own pizza!</h1>
                <label htmlFor="name">
                    Name your pizza!
                    <input id="name" type="text" name="name"/>
                </label>
            </form>
        </div>
    )
}