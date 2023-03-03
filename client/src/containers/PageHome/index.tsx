import { Helmet } from 'react-helmet'
import SectionListProducts from 'components/SectionListProducts'
import Loader from 'components/Loader'

import { useApp } from 'hooks/useApp'
import BreadCrumb from 'components/Breadcrumb'

const Home = () => {
	const { productList, loading } = useApp()

	const products = productList?.items != null ? productList?.items : []
	const categories =
		productList?.categories != null ? productList?.categories : []
	const existCategories = categories.length !== 0

	if (loading) {
		return <Loader />
	}

	return (
		<div
			className="container"
			style={{ padding: existCategories ? '' : '10px' }}
		>
			<Helmet>
				<title>Prueba tecnica Meli</title>
			</Helmet>
			<BreadCrumb
				className={existCategories ? '' : 'none'}
				categories={categories}
			/>
			<SectionListProducts className="" products={products} />
		</div>
	)
}
export default Home
