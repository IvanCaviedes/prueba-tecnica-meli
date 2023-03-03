interface BreadcrumbItemType {
	item: string
	isLast: boolean
}

const BreadcrumbItem = ({ item, isLast }: BreadcrumbItemType) => {
	return (
		<div className="item">
			<span>{item}</span>
			<p className="simbolo">{isLast || '>'}</p>
		</div>
	)
}
export default BreadcrumbItem
