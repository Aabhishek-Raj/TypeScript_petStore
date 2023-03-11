import useCart from "../hooks/UseCart"
import useProducts from "../hooks/useProducts"
import { UseProductsContextType } from "../context/ProductProvider"
import { ReactElement } from "react"
import Product from "./Product"

const ProductList = () => {

    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products } = useProducts()

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if(products?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)
            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }

    const content = (
        <main className="max-w-7xl mx-auto flex flex-col justify-evenly gap-8">
            { pageContent }
        </main>
    )

  return content
}

export default ProductList