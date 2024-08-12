// Imports
    import { FaRepeat } from "react-icons/fa6";

// Import Local
    import ButtonStyle from "./style";
    import ProfilePicture from "../../styles/img/profilePicture.jpg"
    import { COLORS } from "../../styles/css/global";

// Element
    const Button = ({buttonName, text, backgroundColor, color, fontSize, fontWeight, img, username}) =>
    {   
        if(buttonName === "btn-line")
        {
            return(
                <ButtonStyle>
                    <button className="btn-line">{text}</button>
                </ ButtonStyle>
            )
        }    
        else if (buttonName === "btn-green")
        {
            return(
                <ButtonStyle>
                    <button className="btn-green" backgroundColor={backgroundColor} color={color} fontSize={fontSize} fontWeight={fontWeight}>{text}</button>
                </ButtonStyle>
            )
        }  
        else
        {
            return(
                <ButtonStyle>
                    <button className="btn-userLoggedIn">
                        
                        <img src={ProfilePicture} alt="profile pic" />
                        <text>{username}</text>
                        <FaRepeat color={COLORS.DEFAULT_COLOR_1} size={"1em"}/>

                    </button>
                </ButtonStyle>
            )
        }
    }

// Export of the element   
    export default Button;