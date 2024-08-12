// Imports
    import styled from "styled-components"
    import Navbar from 'react-bootstrap/Navbar'; 

// Imports Local
    import { COLORS } from "../../styles/css/global";
    import { backgroundColor, fontColor, fontSize } from "../../utilities/style-utilities";

// Elements style

    // Navbar
        const NavbarStyle = styled(Navbar)`

            /*Background*/
                background-color: ${backgroundColor(COLORS.DEFAULT_COLOR_2)};

            /*Size*/
                padding: 0.5em;

            
        `

    // Navbar Logo
        const LogoNavbarStyle = styled.img`
        
            /*Size*/
                width: 6.75em;

            /*Position*/
                margin-left: 0.4em;
        `

    // Toogle to open menu
        const MenuButtonStyle = styled(Navbar.Toggle)`

            /*Border*/
                border: 0;
        `
          
    // Offcanvas (Menu)
        const OffcanvasStyle = styled(Navbar.Offcanvas)`

            /*Background*/
                background-color: ${backgroundColor(COLORS.DEFAULT_COLOR_2)};

            /*Text*/
                color: ${fontColor("white")};
                font-size: ${fontSize('1.125rem')};

            /*Size*/
                padding: 0.5em;

            // Close Button (Bootstrap)
                .btn-close
                {
                    filter: invert(1);
                    
                }
        `

        // Logo inside navbar
            const LogoOffcanvasStyle = styled.img`
                /*Size*/
                    width: 7em;
            `

        // Div Menu button and Logged In
            const DivRight = styled.div`
                display: inline-flex;
                align-items: center;
                gap: 1em;
            `

// Export Syle
    export  {NavbarStyle, OffcanvasStyle, LogoNavbarStyle, MenuButtonStyle, LogoOffcanvasStyle, DivRight}