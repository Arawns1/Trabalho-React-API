import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.jsx'
import { GlobalStyle } from './common/global/GlobalStyle.jsx'
import { AllRoutes } from '../routes/AllRoutes.jsx'
import { ProductsProvider } from './common/hooks/useProducts.jsx'
import { CartProvider } from './common/hooks/useCart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProductsProvider>
      <CartProvider>
        <AllRoutes />
      </CartProvider>
    </ProductsProvider>
  </ThemeProvider>
)
