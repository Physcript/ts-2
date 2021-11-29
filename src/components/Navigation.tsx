import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

export interface INavigationProps {}
const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
    return (
       <Nav className = "d-flex align-items-center " style = {{ height: '10vh' }}>
            <div>
                <NavbarBrand>Social Adjust</NavbarBrand>
            </div>
            <div className = "ms-auto gap-3 d-flex" >
                <label className = "navbar-item">About us</label>
                <label className = "navbar-item">Contact</label>
                <label className = "navbar-item"></label>
            </div>
       </Nav>
    )
}

export default Navigation
