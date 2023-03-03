import { useForm, Controller } from 'react-hook-form'

import Logo from 'images/Logo.png'
import SearchIcon from 'images/SearchIcon.png'
import { type FormData } from 'components/types'
import { Link } from 'react-router-dom'

const defaultValues: FormData = {
	search: '',
}

interface navbarType {
	onSubmit: (value: FormData) => void
	onClearSubmit: () => void
}

const Navbar = ({ onSubmit, onClearSubmit }: navbarType) => {
	const { control, handleSubmit } = useForm({ defaultValues, mode: 'onBlur' })

	return (
		<>
			<div className="Header">
				<nav className="navbar">
					<Link
						className="navbar-brand"
						to={'/'}
						onClick={onClearSubmit}
					>
						<img src={Logo} alt="Icon-Page" />
					</Link>
					<div className="navbar-collapse">
						<form
							className="form-control"
							noValidate
							autoComplete="off"
							onSubmit={handleSubmit(onSubmit)}
						>
							<Controller
								name="search"
								control={control}
								rules={{ required: true }}
								render={({
									field: { value, onChange, onBlur },
								}) => (
									<>
										<input
											autoFocus
											type="text"
											placeholder="Nunca dejes de Buscar"
											value={value}
											onChange={onChange}
											onBlur={onBlur}
										/>
										<button type="submit">
											<img
												src={SearchIcon}
												alt="icon-search"
											/>
										</button>
									</>
								)}
							/>
						</form>
					</div>
				</nav>
			</div>
		</>
	)
}
export default Navbar
