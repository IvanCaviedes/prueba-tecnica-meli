import { useContext } from 'react'
import { AppContext } from 'app/appContext'

export const useApp = () => useContext(AppContext)
