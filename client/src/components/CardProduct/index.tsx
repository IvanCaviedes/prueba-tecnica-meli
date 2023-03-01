import { ProductDataType } from "data/types"
import { Link } from "react-router-dom";

export interface CardProduct {
    product: ProductDataType
}

const CardProduct = ({ product }: CardProduct) => {

    const {tittle,id} = product
    
    return (
        <>
            <Link to={`detail/${id}`}>{tittle}</Link>
        </>
    )
}
export default CardProduct