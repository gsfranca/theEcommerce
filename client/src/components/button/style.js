// Imports
    import styled from "styled-components"

// Imports Local
    import { COLORS } from "../../styles/css/global"
import { backgroundColor, fontColor, fontSize, fontWeight } from "../../utilities/style-utilities"

// Element style
    const ButtonStyle = styled.div`
        .btn-line
        {
            /*Border*/
                border-width: 0.1em;
                border-style: solid;
                border-color: ${COLORS.WHITE};
                border-radius: 3.125em;

            /*Size*/
                padding: 0.1em 1.875em;

            /*Background*/
                background-color: ${backgroundColor("transparent")};

            /*Text*/
                font-size: ${fontSize("1.125em")};
                color: ${fontColor(COLORS.WHITE)};   
        }
        .btn-line:hover
        {
            /*Background*/
                background-color: ${backgroundColor(COLORS.WHITE)};

            /*Text*/
                color: ${fontColor(COLORS.DEFAULT_COLOR_1)};      

            /*Animation*/
                transition: 150ms;
        }

        .btn-green
        {
            /*Border*/
                border: 0;
                border-radius: 0.625em;

            /*Size*/
                padding: 0.625em 1.5625em;

            /*Background*/
                background-color: ${backgroundColor(COLORS.DEFAULT_COLOR_1)};

            /*Text*/
                font-size: ${fontSize("1.125em")};
                font-weight: ${fontWeight("bold")}; 
                color: ${fontColor(COLORS.WHITE)};   
        }

        .btn-userLoggedIn
        {   
            /*Border*/
                border: 0;
                border-radius: 3.125em;

            /*Background*/
                background-color: ${backgroundColor(COLORS.WHITE)};   

            /*Position*/
                display: inline-flex;
                justify-content: center;
                align-items: center;
                position: relative;

            /*Size*/
                height: fit-content;

                padding-right: 1em;
        }
        .btn-userLoggedIn img
        {
            /*Size*/
                width: 2.3em;
                height: 2.3em;

            /*Border*/
                border: 0.2em solid ${COLORS.WHITE};
                border-radius: 50%;

            /*Position*/
                position: absolute;
                left: 0;
        }
        .btn-userLoggedIn text
        {
            /*Text*/
                color: ${COLORS.DEFAULT_COLOR_1};
                font-size: ${fontSize("1.125em")};

            /*Position*/
                margin-right: 0.7em;
                margin-left: 2.3em;
        }
        
        `
        
// Export Syle
    export default ButtonStyle