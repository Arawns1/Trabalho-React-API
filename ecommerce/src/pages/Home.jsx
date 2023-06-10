import { useEffect, useState } from "react";
import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";
import { api } from "../services/api"
import { TrendingProdutcs } from '../common/components/trendingProducts/TrendingProducts.jsx'
import { FeaturedProducts } from '../common/components/featuredProducts/FeaturedProducts.jsx'
import {MainContainer} from './style'



export function Home(){

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData(){
           const {data: product} = await api.get("/produtos/dto");
           const {data: category} = await api.get("/categorias/dto");
            setProducts(product);
            setCategories(category);
        }
        fetchData()
    }, []);


    return(
        <MainContainer>
            <Banner/>
            <Categories categories={categories}/>
            <TrendingProdutcs products ={products}/>
            <FeaturedProducts/>
        </MainContainer>
    )
}