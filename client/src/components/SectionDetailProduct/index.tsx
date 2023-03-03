/* eslint-disable camelcase */
import { type ProductDataDetailType } from 'app/types'
import { currencyFormatter } from 'utils'

interface SectionDetailProductType {
	item: ProductDataDetailType
}
const SectionDetailProduct = ({ item }: SectionDetailProductType) => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { picture, condition, sold_quantity, tittle, price, description } =
		item

	return (
		<div className="wrapper DetailProduct">
			<div className="product">
				<div className="product-image">
					<img src={picture} alt="Image product" />
				</div>
				<div className="product-info">
					<span>
						{condition} - {sold_quantity} vendidos
					</span>
					<p className="product-info-tittle">{tittle}</p>
					<p className="product-info-price">
						{currencyFormatter({
							currency: price.currency,
							value: price.amount,
						})}
					</p>
					<div className="product-btn">
						<button>Comprar</button>
					</div>
				</div>
			</div>
			<div className="product-description">
				<div className="description">
					<h3>Descripción del producto</h3>
					<p className="text">{description}</p>
				</div>
			</div>
		</div>
	)
}
export default SectionDetailProduct
