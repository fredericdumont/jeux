import { BrowserRouter, Route } from 'react-router-dom'
import { routes } from './routes'

export const AppRouter = () => {
    return <BrowserRouter>
        {
            routes.map((route, index) => {
                return <Route
                    key={index}
                    component={route.component}
                    path={route.path}
                    exact={route.exact ?? true}
                />;
            })
        }
    </BrowserRouter>
}

export default AppRouter;
