import { Banner } from "../common/components/banner/Banner";
import { Categories } from "../common/components/categories/Categories";

import {MainContainer} from './style'

export function Home(){
    return(
        <MainContainer>
            <Banner/>
            <Categories/>
        </MainContainer>
    )
}