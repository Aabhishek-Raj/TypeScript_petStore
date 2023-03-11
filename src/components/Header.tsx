import Nav from "./Nav"
import useCart from "../hooks/UseCart"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {

    const { totalItems, totalPrice } = useCart()

    const content = (
        <header>
            <div className="bg-teal-700 text-white sticky top-0 z-10">
                <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">

                    <h1 className="text-3xl font-medium">Pets & Co</h1>
                    <div>
                        <p>Total Items: {totalItems}</p>
                        <p>Total Price: {totalPrice}</p>
                    </div>

                    <button className="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )

    return content
}

export default Header