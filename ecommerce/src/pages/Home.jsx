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
           const {data: product} = await api.get("/produtos");
            setProducts(product);
            console.log(product)
        }
        fetchData()
        
        
    }, []);


    return(
        <MainContainer>
            <Banner/>
            <Categories/>
            <TrendingProdutcs/>
            <FeaturedProducts/>
        </MainContainer>
    )
}