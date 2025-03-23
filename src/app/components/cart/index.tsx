"use client";

import { addToCart, removeToCart } from "@/app/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/store";

export const Cart = () => {
    const dispatch = useAppDispatch();
    const { items, addedItems } = useAppSelector((state) => state.cart)

    return items.map((item) => (
        <div className="flex flex-col items-center" key={item}> 
            {item}
            {!addedItems.includes(item) ? (
                <button onClick={() => dispatch(addToCart(item))}> Add to Cart </button>
            ) : (
                <button onClick={() => dispatch(removeToCart(item))}> Remove to Cart </button>
            )}
        </div>
    ));
};  