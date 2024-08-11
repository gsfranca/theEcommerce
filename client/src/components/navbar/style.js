import styled from "styled-components"
import Navbar from 'react-bootstrap/Navbar';

import { COLORS } from "../../styles/css/global";

const Navbar_The_Ecommerce = styled(Navbar)`

    /*Navbar*/

        /*Background*/
            background-color: ${COLORS.DEFAULT_COLOR_2};

        /*Size*/
            padding: 0.5em;

    /*End of Navbar*/
    .logo
    {
        /*Size*/
            width: 5em;

        /*Position*/
            margin-left: 0.4em;
    }

    .me-auto
    {
        font-size: 1rem;
    }

    .toogle
    {
        border: 0;
    }
`


export default Navbar_The_Ecommerce