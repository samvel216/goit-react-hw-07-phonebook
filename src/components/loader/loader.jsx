import { ColorRing } from 'react-loader-spinner';
import styled from "styled-components";

const Loader =()=> {
    return (
        <Load><ColorRing/></Load>
        
    )
}

export default Loader

const Load = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;