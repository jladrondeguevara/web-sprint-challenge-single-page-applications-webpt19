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

    const inputChange = event => {
        event.persist();
        const newPizzaData = {
            ...pizzaState,
            [event.target.name]: event.target.value
        }
        validateChange(event)
        setPizzaState(newPizzaData);
    };

    const validateChange = event => {
        yup.reach(formSchema, event.target.name).validate(event.target.value).then(inputIsValid => {
        setErrors({
            ...errors,
            [event.target.name]: ""
        })
    }).catch(err => {
            setErrors({
                ...errors,
                [event.target.name]: err.errors[0]
            })
        })
    }
    

    const [sauce, sauceSelected] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is required!").min(2, "Name must be greater than two characters!"),
        size: yup.string().matches(/(small|sarge)/, "Please select a size!")
    })


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
                    <input id="name" type="text" name="name" onChange={inputChange} value={pizzaState.name}/>
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
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

                <label htmlFor="toppings" className="toppingsSection">
                    Select at least one topping: 
                    
                    <span>
                        <input id="pepperoni" type="checkbox"name="pepperoni"/>
                        Pepperoni       
                    </span>
                    <span>
                        <input id="sausage" type="checkbox"name="sausage"/>
                        Sausage
                    </span>
                    <span>
                        <input id="canadianbacon" type="checkbox"name="canadianbacon"/>
                        Canadian Bacon
                    </span>

                    <span>
                        <input id="italiansausage" type="checkbox"name="italiansausage"/>
                        Spicy Italian Sausage
                    </span>

                    <span>
                        <input id="grilledchicken" type="checkbox"name="grilledchicken"/>
                        Grilled Chicken
                    </span>

                    <span>
                        <input id="onions" type="checkbox"name="onions"/>
                        Onions
                    </span>

                    <span>
                        <input id="greenpepper" type="checkbox"name="greenpepper"/>
                        Green Pepper
                    </span>
                    
                    <span>
                        <input id="dicedtomatoes" type="checkbox"name="dicedtomatoes"/>
                        Diced Tomatoes
                    </span>

                    <span>
                        <input id="blackolives" type="checkbox"name="blackolives"/>
                        Black Olives
                    </span>

                    <span>
                        <input id="roastedgarlic" type="checkbox"name="roastedgarlic"/>
                        Roasted Garlic
                    </span>
                    <span>
                        <input id="artichoque" type="checkbox"name="artichoque"/>
                        Artichoque Hearts
                    </span>

                    <span>
                        <input id="threecheese" type="checkbox"name="threecheese"/>
                        Three Cheese
                    </span>
                    <span>
                        <input id="pineapple" type="checkbox"name="pineapple"/>
                        Pineapple
                    </span>
                    <span>
                        <input id="extracheese" type="checkbox"name="extracheese"/>
                        Extra Cheese
                    </span>
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
            <br></br>
            <span><button>Add to order</button></span>
        </div>
    );
};