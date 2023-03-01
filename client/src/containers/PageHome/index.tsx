import { Helmet } from "react-helmet"

import SectionListProducts from "components/SectionListProducts";

import { DEMO_PRODUCTS } from "data/products";
import { ProductDataType } from "data/types";

import { useApp } from "hooks/useApp";
import { useEffect } from "react";

// const PRODUCTS: ProductDataType[] = DEMO_PRODUCTS

const Home = () => {

   const { productList, SearchProduct } = useApp()

   let PRODUCTS = productList?.items || []

   useEffect(() => {
      SearchProduct({ search: 'camisas' }, (error) => {
         console.log(error);
      })
   }, [])


   return (
      <>
         <Helmet >
            <title>Buenas tardes</title>
         </Helmet>
         <SectionListProducts
            className=""
            products={PRODUCTS}
         />
      </>
   )
}
export default Home