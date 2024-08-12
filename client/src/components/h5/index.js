// Import Style
    import Title5 from "./style";

// Element
    const H5 =  ({text, fontSize, fontWeight, color, aligment, textTransform}) =>
    {         
        return(
            <Title5 fontSize={fontSize} fontWeight={fontWeight} color={color} aligment={aligment} textTransform={textTransform}>{text}</Title5>
        )
    }
      
// Export of the element
    export default H5;