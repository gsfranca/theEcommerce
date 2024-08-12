
// Imports
    import { createGlobalStyle } from "styled-components"
    import 'bootstrap/dist/css/bootstrap.min.css';

// Imports Local
    import DOODLES from "../img/doodles.png";
    
// Global Style Vars
    const DEFAULT_FONT = "'Roboto', sans-serif"

    const COLORS =
    {
        DEFAULT_COLOR_1: "#788A54",
        DEFAULT_COLOR_2: "#363636;",
        WHITE: "#F9F9F9",
        LIGHT_GRAY: "#E9E9E9",
        DARK_GRAY: "#C3C3C3",
        POPUP_BACKGROUND: "#000000b3"   
    }

// Defining this global style and keeping it in a const   
    const Global = createGlobalStyle`
        
        /*Font*/
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        
        /*Global style*/    
            *
            {
                /*Text*/
                    font-family: ${DEFAULT_FONT};
            }

        /*Body style*/
            body
            {
                /*Size*/
                    padding: 0;

                /*Position*/
                    margin: 0;
                    box-sizing: border-box;

                /*Background*/
                    /* background-color: ${COLORS.LIGHT_GRAY}; */
                    background-color: pink;
                    background-image: url(${DOODLES});  
                    background-repeat: repeat;
                    background-size: 18vw;
            }
`
export default Global;
export {COLORS}