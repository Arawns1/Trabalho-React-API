import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../src/common/components/header/headerWithSearch/Header'
import { HeaderWithoutSearch } from '../src/common/components/header/headerWithoutSearch/HeaderWithoutSearch'
import { Home } from '../src/pages/Home'
import {CartPage} from '../src/pages/Cart/CartPage'
import {LoginPage} from '../src/pages/Login/LoginPage'
import {SignUpPage} from '../src/pages/SignUp/SignUpPage'
import App from '../src/App'

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route Component={App}  path='/App'></Route>
                <Route Component={Header}> {/* Esse aparece em todos que estão dentro dele */}
                    <Route Component={Home}  path='/'></Route>
                    
                </Route>
                <Route Component={HeaderWithoutSearch}> {/* Esse aparece em todos que estão dentro dele */}
                    <Route Component={CartPage}  path='/carrinho'></Route>
                </Route>
                <Route Component={HeaderWithoutSearch}> {/* Esse aparece em todos que estão dentro dele */}
                    <Route Component={LoginPage}  path='/login'></Route>
                    <Route Component={SignUpPage}  path='/cadastro'></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}