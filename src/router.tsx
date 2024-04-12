import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ButtonsPage from './buttonPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/buttonPage',
        element: <ButtonsPage />
    }
])

export default router