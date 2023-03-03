import BreadcrumbItem from 'components/BreadcrumbItem'

interface SectionListProductsProps {
	className: string
	categories: string[]
}

const BreadCrumb = ({ categories, className }: SectionListProductsProps) => {
	return (
		<div className={`breadcrumb ` + className}>
			{categories.map((item, index) => (
				<BreadcrumbItem
					key={index}
					item={item}
					isLast={categories.length - 1 === index}
				/>
			))}
		</div>
	)
}
export default BreadCrumb
