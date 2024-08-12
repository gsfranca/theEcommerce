// Import Style
    import Ahref from "./style";

// Element
    const A = ({href, text, color, fontSize, aligment}) =>
    {         
        return(
            <Ahref href={href} color={color} fontSize={fontSize} aligment={aligment}>{text}</Ahref>
        )
    }
        
// Export of the element
    export default A;