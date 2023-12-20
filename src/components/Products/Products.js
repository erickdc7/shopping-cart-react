import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import "./Products.css"

const Products = () => {
    const { data } = useContext(dataContext)

    return (
        data.map((product) => {
            return (
                <div className="card">
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <button>Buy</button>
                </div>
            )
        })
    )
}

export default Products