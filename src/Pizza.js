import React, {useState, useEffect} from "react";
import * as yup from 'yup';
import "./Pizza.css";

export default function Pizza () {
    const [pizzaState, setPizzaState] = useState({
        name: "",
        size: "",
        toppings: "",
        sauce: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        sauce: ""
    })

    

    const [sauce, sauceSelected] = useState("");

    useEffect(() => {
        formSchema.isValid(pizzaState).then(isFormValid => {
            setButtonDisabled(!isFormValid)
        })
    }, [formSchema]);


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
                    Select a sauce: 
                    <input id="pizza-sauce-original" type="radio"name="original" checked={sauce === "original"} onClick={() => sauceSelected('original')} className="sauceCheck"/>
                    Original Sauce
                    <input id="pizza-sauce-garlic" type="radio"name="garlic" checked={sauce === "garlic"} onClick={() => sauceSelected('garlic')} className="sauceCheck"/>
                    Garlic Ranch
                    <input id="pizza-sauce-ranch" type="radio"name="bbq" checked={sauce === "bbq"} onClick={() => sauceSelected('bbq')} className="sauceCheck"/>
                    BBQ Sauce
                    <input id="pizza-sauce-bbq" type="radio"name="spinach" checked={sauce === "spinach"} onClick={() => sauceSelected('spinach')} className="sauceCheck"/>
                    Spinach Alfredo
                </label>

                <label htmlFor="toppings">
                    Select at least one topping: 
                    
                    <input id="pepperoni" type="checkbox"name="pepperoni"/>
                    Pepperoni
                    <input id="sausage" type="checkbox"name="sausage"/>
                    Sausage
                    <input id="canadianbacon" type="checkbox"name="canadianbacon"/>
                    Canadian Bacon
                    <input id="italiansausage" type="checkbox"name="italiansausage"/>
                    Spicy Italian Sausage
                    <input id="grilledchicken" type="checkbox"name="grilledchicken"/>
                    Grilled Chicken
                    <input id="onions" type="checkbox"name="onions"/>
                    Onions
                    <input id="greenpepper" type="checkbox"name="greenpepper"/>
                    Green Pepper
                    <input id="dicedtomatoes" type="checkbox"name="dicedtomatoes"/>
                    Diced Tomatoes
                    <input id="blackolives" type="checkbox"name="blackolives"/>
                    Black Olives
                    <input id="roastedgarlic" type="checkbox"name="roastedgarlic"/>
                    Roasted Garlic
                    <input id="artichoque" type="checkbox"name="artichoque"/>
                    Artichoque Hearts
                    <input id="threecheese" type="checkbox"name="threecheese"/>
                    Three Cheese
                    <input id="pineapple" type="checkbox"name="pineapple"/>
                    Pineapple
                    <input id="extracheese" type="checkbox"name="extracheese"/>
                    Extra Cheese
                </label>
                
                <label htmlFor="gluten">
                    Choice of substitute
                    <input type="checkbox" />
                    Gluten Free (+$1.00)
                </label>

                <label htmlFor="specialInstructions">
                    Special instructions: 
                    <input id="instructions" type="text" />
                </label>

                
            </form>
            <button>Add to order</button>
        </div>
    );
};