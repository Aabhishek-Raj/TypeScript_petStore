import { ChangeEvent, ReactElement } from "react"
import { CartItemType } from "../context/CartProvider"
import { ReducerAction } from "../context/CartProvider"
import { ReducerActionType } from "../context/CartProvider"

type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const CartLine = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {

    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

    const lineTotal: number = (item.qty * item.price)

    const highestQty: number = 20 > item.qty ? 20 : item.qty

    const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)

    const options: ReactElement[] = optionValues.map(val => {
        return <option key={`opt${val}`} value={val}>{val}</option>
    })

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) }
        })
    }

    const onRemove = () => {
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item
        })
    }

    const content = (
        <li>
            <img className="w-60 h-80" src={img} alt={item.name} />
            <div aria-label="Item Name">{item.name}</div>
            <div aria-label="Price per Item">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</div>

            <label htmlFor="itemQty" className="offscreen"> Item Quantity</label>
            <select
                name="itemQty"
                id="itemQty"
                value={item.qty}
                aria-label='Item Quantity'
                onChange={onChangeQty}
            >
                {options}
            </select>

            <div aria-label="Line Item subTotal">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(lineTotal)}
            </div>

            <button
                className="bg-teal-700 p-2 rounded-2xl"
                aria-label="Remove Item From Cart"
                onClick={onRemove}
            >
                Remove
            </button>
        </li>
    )

    return content
}

export default CartLine