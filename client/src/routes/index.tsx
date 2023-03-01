import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Page } from "./types";

import PageHome from "containers/PageHome";
import Page404 from "containers/Page404";
import PageDetail from "containers/PageDetail";

import Header from "components/Header";
import Footer from "components/Footer";

export const pages: Page[] = [
    { path: '/', exact: true, Component: PageHome },
    { path: '/#', exact: true, Component: PageHome },
    { path: '/page404', exact: true, Component: Page404 },
    { path: '/detail/:id', exact: true, Component: PageDetail }
]

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {
                    pages.map(({ Component, path, exact }) => {
                        return (
                            <Route
                                key={path}
                                element={<Component />}
                                path={path}
                            />
                        )
                    })
                }
                <Route path="*" element={<Page404 />} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default Routes