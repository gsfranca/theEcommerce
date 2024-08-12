// Imports
    import styled from "styled-components"

// Imports Local
    import { fontColor, fontSize, fontWeight, textAlign, textTransform } from "../../utilities/style-utilities"

// Element style
    const Title6 = styled.h6`

        /*Text*/
            font-size:      ${fontSize('1.125rem')} ;
            font-weight:    ${fontWeight('bold')};
            color:          ${fontColor('black')};
            text-align:     ${textAlign('center')};
            text-transform: ${textTransform('uppercase')};
    `

// Export Style
    export default Title6