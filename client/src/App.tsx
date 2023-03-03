import MyRouter from 'routes'
import { AppProvider } from 'app/appContext'

const App = () => {
	return (
		<AppProvider>
			<MyRouter />
		</AppProvider>
	)
}

export default App
