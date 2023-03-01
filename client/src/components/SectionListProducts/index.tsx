import { ProductDataType } from "data/types";
import CardProduct from "components/CardProduct";

interface SectionListProductsProps {
    className: string;
    products: ProductDataType[]
}

const SectionListProducts = ({ className, products }: SectionListProductsProps) => {

    return (
        <>
            {
                products.map((item, index) => (
                    <>
                        <CardProduct
                            key={index}
                            product={item}
                        />
                    </>
                ))
            }
        </>
    )
}
export default SectionListProducts