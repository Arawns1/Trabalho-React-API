import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";
import { TrendingProdutcs } from '../common/components/trendingProducts/TrendingProducts.jsx'
import { FeaturedProducts } from '../common/components/featuredProducts/FeaturedProducts.jsx'

import {MainContainer} from './style'

export function Home(){
    return(
        <MainContainer>
            <Banner/>
            <Categories/>
            <TrendingProdutcs/>
            <FeaturedProducts/>
        </MainContainer>
    )
}