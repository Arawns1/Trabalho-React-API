import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../src/common/components/header/headerWithSearch/Header'
import { HeaderWithoutSearch } from '../src/common/components/header/headerWithoutSearch/HeaderWithoutSearch'
import { Home } from '../src/pages/Home'
import {CartPage} from '../src/pages/Cart/CartPage'
import {LoginPage} from '../src/pages/Login/LoginPage'
import {SignUpPage} from '../src/pages/SignUp/SignUpPage'
import { PaymentPage } from '../src/pages/Payment/PaymentPage'
import { NotFoundPage } from '../src/pages/Exceptions/NotFound/NotFoundPage'
import {EmptyCartPage} from '../src/pages/Exceptions/EmptyCartPage/EmptyCart'
import { OrderComplete } from '../src/pages/OrderComplete/OrderComplete'
import { MyOrdersPage } from '../src/pages/MyOrders/MyOrdersPage'

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route Component={Header}> {/* Esse aparece em todos que estão dentro dele */}
                        <Route Component={Home}  path='/'></Route>
                    </Route>
                    <Route Component={HeaderWithoutSearch}> {/* Esse aparece em todos que estão dentro dele */}
                        <Route Component={CartPage}  path='/carrinho'></Route>
                        <Route Component={EmptyCartPage}  path='/carrinho-vazio'></Route>
                        <Route Component={LoginPage}  path='/login'></Route>
                        <Route Component={SignUpPage}  path='/cadastro'></Route>
                        <Route Component={PaymentPage} path='/pagamento'></Route>
                        <Route Component={OrderComplete} path='/pedido-concluido'></Route>
                        <Route Component={MyOrdersPage} path='/meus-pedidos'></Route>
                    </Route>
                <Route Component={NotFoundPage} path='*'/>
            </Routes>

        </BrowserRouter>
    )
}