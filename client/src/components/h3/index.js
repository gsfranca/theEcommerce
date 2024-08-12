// Import Style
    import Title3 from "./style";

// Element
    const H3 = ({text, fontSize, fontWeight, color, aligment, textTransform}) =>
    {         
        return(
            <Title3 fontSize={fontSize} fontWeight={fontWeight} color={color} aligment={aligment} textTransform={textTransform}>{text}</Title3>
        )
    }
      
// Export of the element
    export default H3;