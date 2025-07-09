import {
  setFilter,
} from "../../features/countries/countriesSlice";
import {  Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
const PageNav = ({ filter }) => {
      const dispatch = useDispatch();
  return (
 
      <NavbarMain expand="lg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#" className="fw-bold text-gray-3D">
            Countries
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link
                as="button"
                active={filter === "All"}
                onClick={() => dispatch(setFilter("All"))}
              >
                All
              </Nav.Link>
              <Nav.Link
                as="button"
                active={filter === "Asia"}
                onClick={() => dispatch(setFilter("Asia"))}
              >
                Asia
              </Nav.Link>
              <Nav.Link
                as="button"
                active={filter === "Europe"}
                onClick={() => dispatch(setFilter("Europe"))}
              >
                Europe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarMain>
 
  );
};

export default PageNav;

 
const NavbarMain = styled(Navbar)`
  .navbar-collapse {
    padding: 30px 0;

    .nav-link {
        border-bottom: solid 2px transparent;
      margin: 0 0 0 15px;
      color: #8b8b8b;
      font-weight: 600;
      text-align: left;
      font-size: 16px;
      min-width: 55px;
      height: 40px;
      padding: 0;
      &.active {
        border-bottom: solid 2px #3e3e3e;
        color: #3d3d3d;
      }
    }
  }
`;
 
 