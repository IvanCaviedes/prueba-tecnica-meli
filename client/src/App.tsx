import MyRouter from "routes";
import { AppProvider } from "app/appContext";

function App() {
  return (
    <AppProvider>
      <MyRouter />
    </AppProvider>
  )
}

export default App
