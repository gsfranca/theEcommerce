// Font Size
    function fontSize(size)
    {
        return (props) => props.fontSize || size
    }

// Font Color (Color)
    function fontColor(color)
    {
        return (props) => props.color || color
    }

// Font Weight
    function fontWeight(weight)
    {
        return (props) => props.weight || weight
    }
// Text Allign
    function textAlign(align)
    {
        return (props) => props.alignment || align
    }

// Text Transform (Uppercase, etc)
    function textTransform(transform)
    {
        return (props) => props.textTransform || transform
    }

// Background color
    function backgroundColor(color)
    {
        return (props) => props.backgroundColor || color
    }


export { fontSize, fontColor, fontWeight, textAlign, textTransform, backgroundColor }