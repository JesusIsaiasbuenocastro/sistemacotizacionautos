import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../footer/footer';

import Header from '../header/header';

const StyleDiv = styled.div`
`;


const LayOut = () => {
    return (
        <StyleDiv>
            <Header/>
            
            
            <Outlet/>
            <Footer/>
        </StyleDiv>
       
     );
}
 
export default LayOut;