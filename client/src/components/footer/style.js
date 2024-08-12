// Imports
    import styled from "styled-components"

// Imports Local
    import { backgroundColor, fontColor, fontSize } from "../../utilities/style-utilities"
    import { COLORS } from "../../styles/css/global"

// Footer style
    const FooterStyle = styled.footer`

        /*Background*/
            background-color: ${backgroundColor(COLORS.DEFAULT_COLOR_1)};

        /*Size*/
            padding: 1em 0;
        `

// Div to center the texts
    const  DivCenter= styled.div`
        /*Size*/
            width: fit-content;

        /*Position*/
            position: relative;
            left: 50%;
            transform: translateX(-50%);

        /*Icon Left*/
            .icon-person-start
            {
                /*Position*/
                    margin-right: 2em;
            }

        /*Icon Right*/
            .icon-person-end
            {
                /*Position*/
                    margin-left: 2em;
            }
    `

// Texts that are not hiperlink
    const TextStyle = styled.text`

        /*Text*/
            color: ${fontColor("white")};
            font-size: ${fontSize("1.125rem")};
    `
        
// Export Syle
    export {FooterStyle, TextStyle, DivCenter}