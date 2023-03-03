/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */

import { type ProductDataType } from 'data/types'
import { useNavigate } from 'react-router-dom'
import Shipping from 'images/Shipping.png'
import { currencyFormatter } from 'utils'

export interface CardProductType {
	product: ProductDataType
}

const CardProduct = ({ product }: CardProductType) => {
	const { tittle, id, price, free_shipping, condition, picture, location } =
		product

	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/detail/${id}`)
	}

	return (
		<div className="card-product" onClick={handleNavigate}>
			<div className="card-header">
				<img className="card-image" src={picture} alt="Product Image" />
			</div>
			<div className="card-body">
				<div className="product-price">
					<p>
						{currencyFormatter({
							currency: price.currency,
							value: price.amount,
						})}
					</p>
					<div className="product-logo-free-shipping">
						{free_shipping || (
							<img src={Shipping} alt="logo-free-shipping" />
						)}
					</div>
				</div>
				<div className="product-info">
					<p>{tittle}</p>
					<p>{condition}</p>
				</div>
			</div>
			<div className="card-footer">
				<p>{location}</p>
			</div>
		</div>
	)
}
export default CardProduct
