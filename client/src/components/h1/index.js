// Import Style
    import Title1 from "./style";

// Element
    const H1 = ({text, fontSize, fontWeight, color, aligment, textTransform}) =>
    {         
        return(
            <Title1 fontSize={fontSize} fontWeight={fontWeight} color={color} aligment={aligment} textTransform={textTransform}>{text}</Title1>
        )
    }
      
// Export of the element
    export default H1;