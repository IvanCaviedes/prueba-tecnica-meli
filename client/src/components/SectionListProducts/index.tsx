import { type ProductDataType } from 'data/types'
import CardProduct from 'components/CardProduct'
import NoProducts from 'components/NoProducts'

interface SectionListProductsProps {
	className: string
	products: ProductDataType[]
}

const SectionListProducts = ({
	className,
	products,
}: SectionListProductsProps) => {
	return (
		<div className={`wrapper ` + className}>
			{products.length !== 0 && products.length > 0 ? (
				products.map((item, index) => (
					<>
						<CardProduct key={index} product={item} />
					</>
				))
			) : (
				<NoProducts />
			)}
		</div>
	)
}
export default SectionListProducts
