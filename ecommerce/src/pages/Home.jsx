import { useEffect, useState } from "react";
import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";
import { api } from "../services/api"
import { TrendingProdutcs } from '../common/components/trendingProducts/TrendingProducts.jsx'
import { FeaturedProducts } from '../common/components/featuredProducts/FeaturedProducts.jsx'
import {MainContainer} from './style'



export function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
           const {data: product} = await api.get("/produtos/dto");
            setProducts(product);
        }
        fetchData()
        
        
    }, []);


    return(
        <MainContainer>
            <Banner/>
            <Categories/>
            <TrendingProdutcs products ={products}/>
            <FeaturedProducts/>
        </MainContainer>
    )
}