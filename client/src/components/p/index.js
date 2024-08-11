import Paragraph from "./style";

const P = ({text, alignment, color}) =>
{         
    return(
        <Paragraph alignment={alignment} color={color}>{text}</Paragraph>
    )
}
    
    export default P;