import styled from "styled-components"

const Paragraph = styled.p`
        font-size:  ${(props) => props.fontSize || '1.125em'} ;
        text-align: ${(props) => props.alignment || 'left'};
        color: ${(props) => (props.color || 'black')};
    `

export default Paragraph