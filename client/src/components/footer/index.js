// Import
    import { ImUserTie } from "react-icons/im";
    
// Import local
    import A from "../a";
    import {DivCenter, FooterStyle, TextStyle} from "./style";
// Element
    const Footer = ({date, color, fontSize}) =>
    {         
        return(
            <FooterStyle>

                <DivCenter>
                    <ImUserTie color="white" size={'1.3125em'} className="icon-person-start"/>

                    {/*Text (same line - made by  @gsfranca | last update: August 11, 2024 |  avaliable on github)*/}
                        <TextStyle 
                            color={color} 
                            fontSize={fontSize}
                        >
                            made by &nbsp;
                        </TextStyle>
                        
                        <A 
                            href="github.com/gsfranca" 
                            color={"white"} 
                            text="@gsfranca"
                        />

                        <TextStyle
                            color={color} 
                            fontSize={fontSize}
                        >
                            &nbsp;|  last update: {date} | &nbsp;
                        </TextStyle>
                        
                        <A 
                            href="github.com/gsfranca/theEcommerce"  
                            color={"white"} 
                            text="avaliable on github"
                        />
                    {/*End of text*/}

                    <ImUserTie color="white" size={'1.3125em'} className="icon-person-end"/>
                </DivCenter>

            </FooterStyle>
        )
    }

// Export of the element   
    export default Footer;