import { useEffect, useState } from "react";
import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";
import { api } from "../services/api"
import {TrendingProducts} from "../common/components/trendingProducts/TrendingProducts"
import { FeaturedProducts } from '../common/components/featuredProducts/FeaturedProducts.jsx'
import { getItem } from "../services/LocalStorage";
import {MainContainer} from './style'

export function Home(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState(getItem('carrinho') || []);

    useEffect(() => {
        async function fetchData(){
           const {data: product} = await api.get("/produtos/dto");
           const {data: category} = await api.get("/categorias/dto");
           setProducts(product);
           setCategories(category);
        }
        fetchData()
    }, []);

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
            <TrendingProducts products ={products} cart={cart} cartAction={setCart}/>
            <FeaturedProducts/>
        </MainContainer>
    )
}