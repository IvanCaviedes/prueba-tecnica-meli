import LoadingGif from 'images/loading.gif'

const Loading = () => {
	return (
		<div className="container">
			<div className="sectionLoader">
				<img src={LoadingGif} alt="Image Loader" />
			</div>
		</div>
	)
}
export default Loading
