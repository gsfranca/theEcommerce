/*---------------------TO-DO---------------------
- Add all links to Navbar.
-----------------------------------------------*/

// Imports Bootstrap

    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import Offcanvas from 'react-bootstrap/Offcanvas';

// Imports Local
    import LOGO from "../../styles/img/logo.png"
    import {LogoNavbarStyle, LogoOffcanvasStyle, MenuButtonStyle, NavbarStyle, OffcanvasStyle, DivRight} from './style';
    import Button from '../button';
    
// Element}
    function NavBar({fontSize, color, backgroundColor}) 
    {
        return (
            /*Navbar*/
                <NavbarStyle key={false} expand={false} fixed="top" variant='dark' backgroundColor={backgroundColor}>

                    {/*Container Navbar*/}
                        <Container fluid>

                            {/*Logo*/}
                                <Navbar.Brand href="#"><LogoNavbarStyle src={LOGO} alt='Logo The Ecommerce' /></Navbar.Brand>

                            {/*Menu Button*/}
                                <DivRight>
                                    <Button text="Button" username="Pomba" buttonName="btn-userLoggedIn"/>
                                    <Button text="Log In" buttonName="btn-line"/>
                                    <MenuButtonStyle />
                                </DivRight>
                                

                            {/*Navbar Body*/}
                                <OffcanvasStyle placement="end" backgroundColor={backgroundColor} fontSize={fontSize} color={color}>

                                    {/*Header*/}
                                        <Offcanvas.Header closeButton>
                                            <LogoOffcanvasStyle src={LOGO} alt='Logo The Ecommerce' />
                                        </Offcanvas.Header>
                                    {/*End of Header*/}

                                    {/*Body*/}
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link href="#action1">Home</Nav.Link>
                                            </Nav>
                                        </Offcanvas.Body>
                                    {/*End of Body*/}
                                        
                                </OffcanvasStyle>
                            {/*End of Navbar Body*/}

                        </Container>
                    {/*Container Navbar*/}

                </NavbarStyle>
            /*End of Navbar*/
        );
    }
// Export of the element
    export default NavBar;