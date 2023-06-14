import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";
import { FeaturedProducts } from '../common/components/featuredProducts/FeaturedProducts.jsx';
import { TrendingProducts } from "../common/components/trendingProducts/TrendingProducts";
import { useProducts } from "../common/hooks/useProducts";
import { MainContainer } from './style';

export function Home(){

    const {products, filteredProducts, categories} = useProducts();

    return(
        <MainContainer>
            <Banner/>
            <Categories categories={categories}/>
            <TrendingProducts products ={filteredProducts}/>
            <FeaturedProducts products={products}/>
        </MainContainer>
    )
}