// Imports
    import styled from "styled-components"
    
// Imports Local
    import { COLORS } from "../../styles/css/global";
    import { fontColor, fontSize, textAlign } from "../../utilities/style-utilities";

// Element style
    const Ahref = styled.a`

        /*Text*/
            font-size:  ${fontSize('1.125rem')} ;
            color:      ${fontColor(COLORS.DEFAULT_COLOR_1)};
            text-align: ${textAlign('left')};
    `
// Export Syle
    export default Ahref