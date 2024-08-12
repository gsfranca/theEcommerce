// Import Style
    import Title6 from "./style";

// Element
    const H6 = ({text, fontSize, fontWeight, color, aligment, textTransform}) =>
    {         
        return(
            <Title6 fontSize={fontSize} fontWeight={fontWeight} color={color} aligment={aligment} textTransform={textTransform}>{text}</Title6>
        )
    }
      
// Export of the element
    export default H6;