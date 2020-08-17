import React, {useState, useEffect} from "react";
import * as yup from 'yup';


export default function Pizza () {
    const [pizzaState, setPizzaState] = useState({
        name: "",
        size: "",
        toppings: "",
        sauce: "Original"
    });

    const [sauce, sauceSelected] = useState("");

    return (
        <div className="pizza-form">
            <form>
                <h1>Build your own pizza!</h1>
                <label htmlFor="name">
                    Name your pizza: 
                    <input id="name" type="text" name="name"/>
                </label>

                <label htmlFor="size">
                    Select your size: 
                    <select id="size" name="size">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                </label>

                <label htmlFor="sauce">
                    <input id="pizza-sauce-original" type="radio"name="original" checked={sauce === "original"} onClick={() => sauceSelected('original')} className="sauceCheck"/>
                    Original Sauce
                    <input id="pizza-sauce-garlic" type="radio"name="garlic" checked={sauce === "garlic"} onClick={() => sauceSelected('garlic')} className="sauceCheck"/>
                    Garlic Ranch
                    <input id="pizza-sauce-ranch" type="radio"name="bbq" checked={sauce === "bbq"} onClick={() => sauceSelected('bbq')} className="sauceCheck"/>
                    BBQ Sauce
                    <input id="pizza-sauce-bbq" type="radio"name="spinach" checked={sauce === "spinach"} onClick={() => sauceSelected('spinach')} className="sauceCheck"/>
                    Spinach Alfredo
                </label>
            </form>
        </div>
    )
}