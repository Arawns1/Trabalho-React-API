import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";
import { FeaturedProducts } from '../common/components/featuredProducts/FeaturedProducts.jsx';
import { TrendingProducts } from "../common/components/trendingProducts/TrendingProducts";
import { useProducts } from "../common/hooks/useProducts";
import { api } from "../services/api";
import { MainContainer } from './style';

export function Home(){

    const {products, filteredProducts, categories} = useProducts();

    async function handleRole(){
        const {data: role} = await api.post("/roles", {
            "name": "ROLE_ADMIN"
            })
        console.log(role)
    }
    return(
        <MainContainer>
            <button onClick={handleRole}> Cadastrar Role</button>
            <Banner/>
            <Categories categories={categories}/>
            <TrendingProducts products ={filteredProducts}/>
            <FeaturedProducts products={products}/>
        </MainContainer>
    )
}