// Import Style
    import Title4 from "./style";

// Element
    const H4 = ({text, fontSize, fontWeight, color, aligment, textTransform}) =>
    {         
        return(
            <Title4 fontSize={fontSize} fontWeight={fontWeight} color={color} aligment={aligment} textTransform={textTransform}>{text}</Title4>
        )
    }
      
// Export of the element
    export default H4;