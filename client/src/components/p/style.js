// Imports
    import styled from "styled-components"

// Imports Local
    import { fontColor, fontSize, textAlign } from "../../utilities/style-utilities"

// Element Style
    const Paragraph = styled.p`

        /*Text*/
            font-size:  ${fontSize('1.125rem')} ;
            text-align: ${textAlign('left')};
            color: ${fontColor('black')};
        `

// Export Style
    export default Paragraph