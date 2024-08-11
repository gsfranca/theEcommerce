import styled from "styled-components"
import { COLORS } from "../../styles/css/global";
const Ahref = styled.a`
     font-size:  ${(props) => props.fontSize || '1.125em'} ;
     color: ${(props) => (props.color || COLORS.DEFAULT_COLOR_1)};
       
    `

export default Ahref