import useCart from "../hooks/UseCart"
import { useState } from "react"
import CartLine from "./CartLine"

const Cart = () => {

    const [confirm, setConfirm] = useState<boolean>(false)

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUMMIT })
        setConfirm(true)
    }

    const pageContent = confirm ? <h2>Thank You For your Order.</h2> : <>
        <h2>Cart</h2>
        <ul className="flex gap-10">{cart.map(item => {
            return (
                <CartLine
                    key={item.sku}
                    item={item}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
            )
        })}</ul>

        <div className="ml-auto">
            <p>Total Item: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <button className="bg-teal-700 p-2 rounded-2xl" disabled={!totalItems} onClick={onSubmitOrder}>Place Order</button>
        </div>
    </>

    const content = (
        <main className="max-w-7xl mx-auto justify-evenly gap-8">
            {pageContent}
        </main>
    )

    return content
}

export default Cart