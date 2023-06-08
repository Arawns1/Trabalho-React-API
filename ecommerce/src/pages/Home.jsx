import { Banner } from "../common/components/banner/Banner";

import {MainContainer} from './style'

export function Home(){
    return(
        <MainContainer>
            <h1>Essa é a home</h1>
            <Banner/>
        </MainContainer>
    )
}