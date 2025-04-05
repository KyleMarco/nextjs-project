"use client"

import { removeToCart } from "@/app/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/store";

const Checkout = () => {
    const dispatch = useAppDispatch();
    const { addedItems } = useAppSelector((state) => state.cart);

    if (!addedItems.length) {
        return <h1> Empty Basket! </h1>
    }

    return addedItems.map((item) =>(
        <div className="flex flex-col items-center" key={item}> 
            {item}
            <button onClick={() => dispatch(removeToCart(item))}> Remove to Cart </button>
        </div>
    ));
};


export default Checkout;