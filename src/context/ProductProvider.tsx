import { createContext, ReactElement, useState, useEffect } from "react"
import Data from '../../data/products.json'

export type ProductType = {
    sku: string,
    name: string,
    price: number
}

const initState: ProductType[] = Data.products

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: []}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    // useEffect(() => {
    //     const fetchData = async(): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products').then((res) => {
    //             return res.json()
    //         }).catch(err => {
    //             if(err instanceof Error) console.log(err.message)
    //         })
    //         return data
    //     }

    //     fetchData().then(products => setProducts(products))
    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            { children }
        </ProductsContext.Provider> 
    )
}

export default ProductsContext