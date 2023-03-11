import { ProductType } from "../context/ProductProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)
    
    const onAddCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1 }})


    const itemInCart = inCart ? ' -> Item in Cart ' : null

    const content = 
        <article className=" md:flex gap-7">
            <img className="w-96 h-full" src={img} alt={product.name} />
            <div className=" p-12 ">

            <h3 className="text-2xl font-semibold text-teal-700">{product.name}</h3>
            <p className="text-teal-700 text-xl p-4 ">{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(product.price)} {itemInCart}</p>

            <button className=" p-2 text-3xl hover:shadow-2xl hover:shadow-teal-700" onClick={onWishList}>💚</button>
            <button className="bg-teal-700 p-3 rounded-2xl" onClick={onAddCart}>Add To Cart</button>
            </div>
        </article>

    return content
}

export default Product