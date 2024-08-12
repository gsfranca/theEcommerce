// Imports Local
    import Paragraph from "./style";

// Element
    const P = ({text, alignment, color, size}) =>
    {         
        return(
            <Paragraph alignment={alignment} color={color} size={size}>{text}</Paragraph>
        )
    }
    
// Export of the element
    export default P;