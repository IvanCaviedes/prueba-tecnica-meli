import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'components/Loader'
import { useApp } from 'hooks/useApp'
import BreadCrumb from 'components/Breadcrumb'
import { Helmet } from 'react-helmet'
import SectionDetailProduct from 'components/SectionDetailProduct'
import { itemEmptyDetalle } from 'app/types'

interface paramsType {
	id: string
}

const Component = () => {
	const { id } = useParams<keyof paramsType>() as paramsType

	const { GetItemDetalle, itemDetalle, loading, productList } = useApp()

	const categories =
		productList?.categories != null ? productList?.categories : []

	const listItemDetalle =
		itemDetalle?.item != null ? itemDetalle?.item : itemEmptyDetalle

	const existCategories = categories.length !== 0


	useEffect(() => {
		GetItemDetalle({ id }, (err) => {
			console.log(err)
		})
	}, [])

	if (loading) {
		return <Loader />
	}

	return (
		<div
			className="container"
			style={{ padding: existCategories ? '' : '10px' }}
		>
			<Helmet>
				<title>{itemDetalle?.item.tittle}</title>
			</Helmet>
			<BreadCrumb
				className={existCategories ? '' : 'none'}
				categories={categories}
			/>
			<SectionDetailProduct item={listItemDetalle} />
		</div>
	)
}
export default Component
