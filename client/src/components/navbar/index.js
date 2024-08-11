/*---------------------TO-DO---------------------
- Fix Navbar body color, class is not working.
- Add all links to Navbar.
- Create login button (component).
- Create logged in button.
-----------------------------------------------*/

/*Bootstrap*/

    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import Offcanvas from 'react-bootstrap/Offcanvas';

/*Local*/
    import LOGO from "../../styles/img/logo.png"
    import Navbar_The_Ecommerce from './style';


function NavBar() 
{
    return (
        /*Navbar*/
            <Navbar_The_Ecommerce key={false} expand={false} fixed="top" variant='dark'>

                {/*Container Navbar*/}
                    <Container fluid>

                        {/*Logo*/}
                            <Navbar.Brand href="#"><img src={LOGO} className="logo" /></Navbar.Brand>

                        {/*Menu Button*/}
                            <Navbar.Toggle className='toogle'/>

                        {/*Navbar Body*/}
                            <Navbar.Offcanvas placement="end">

                                {/*Header*/}
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>TheEcommerce</Offcanvas.Title>
                                    </Offcanvas.Header>
                                {/*End of Header*/}

                                {/*Body*/}
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                            <Nav.Link href="#action1">Home</Nav.Link>
                                        </Nav>
                                    </Offcanvas.Body>
                                {/*End of Body*/}
                                    
                            </Navbar.Offcanvas>
                        {/*End of Navbar Body*/}

                    </Container>
                {/*Container Navbar*/}

            </Navbar_The_Ecommerce>
        /*End of Navbar*/
      );
}

export default NavBar;