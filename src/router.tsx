import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ButtonsPage from './buttonPage'
import { LoginPage } from './template-paractice/LoginPage'
import GridParacticePage from './gridParaticePage'
import { LoginPage2 } from './template-paractice/LoginPage2/Page'
import { GridPage } from './template-paractice/GridPage'
import { DashBoardPage } from './template-paractice/DashboardPage'
import { PureFlexBox } from './flexPage/PureFlexBox'
import { StackLoyoutPage } from './flexPage/StackLayoutBox'
import { LadningPage } from './template-paractice/LandingPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/buttonPage',
        element: <ButtonsPage />
    },
    {
        path: '/template/login',
        element: <LoginPage />
    },
    {
        path: '/template/login2',
        element: <LoginPage2 />
    },
    {
        path: '/template/dashboard',
        element: <DashBoardPage />
    },
    {
        path: '/template/landingPage',
        element: <LadningPage />
    },
    {
        path: '/template/grid',
        element: <GridPage />
    },
    {
        path: '/gridParaticePage',
        element: <GridParacticePage />
    },
    {
        path: '/stackLayoutPage',
        element: <StackLoyoutPage />
    }
])

export default router