type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {

    const button = viewCart ? <button className="text-1xl bg-teal-900 p-4" onClick={() => setViewCart(false)}>View Products</button> : <button className="ml-auto text-1xl rounded-3xl bg-teal-900 p-2" onClick={() => setViewCart(true)}>View Cart</button>

    const content = (
        <nav className="ml-auto justify-end">
            {button}
        </nav>
    )
    
    return content
}

export default Nav