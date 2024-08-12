// Import Style
    import Title2 from "./style";

// Element
    const H2 = ({text, fontSize, fontWeight, color, aligment, textTransform}) =>
    {         
        return(
            <Title2 fontSize={fontSize} fontWeight={fontWeight} color={color} aligment={aligment} textTransform={textTransform}>{text}</Title2>
        )
    }
      
// Export of the element
    export default H2;