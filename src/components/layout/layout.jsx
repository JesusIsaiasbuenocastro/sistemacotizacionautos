import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import Header from '../header/header';

const StyleDiv = styled.div`
    width: 100%;
	max-width: 1200rem;
`;


const LayOut = () => {
    return (
        <StyleDiv>
            <Header>
            </Header>
            <Outlet/>
        </StyleDiv>
       
     );
}
 
export default LayOut;