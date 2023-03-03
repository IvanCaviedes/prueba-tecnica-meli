import Navbar from 'components/Nabvar'
import { type FormData } from 'components/types'

import { useApp } from 'hooks/useApp'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const { SearchProduct, clearProductList } = useApp()
	const Navigate = useNavigate()

	const onSubmit = (data: FormData) => {
		SearchProduct(data, (error) => {
			console.log(error)
		})
		Navigate(`/`)
	}

	const onClearSubmit = () => {
		clearProductList()
	}

	return <Navbar onSubmit={onSubmit} onClearSubmit={onClearSubmit} />
}
export default Header
