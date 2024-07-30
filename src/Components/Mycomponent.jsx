import { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShipping = (event) => {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input type="text" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} 
                      onChange={handleCommentChange} 
                      placeholder="Enter Delivery Instructions" />

            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                                    checked={shipping === "Pick Up"}
                                    onChange={handleShipping}/>
                                    Pick Up
            </label>
            
            <input type="radio" value="Delivery" 
                                checked={shipping === "Delivery"}
                                onChange={handleShipping}/>
                                Delivery
            
            <p>Shipping: {shipping}</p>
        </div>
    );


}

export default MyComponent