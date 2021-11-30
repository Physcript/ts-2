import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export interface INavigationProps {}
const Navigation: React.FunctionComponent<INavigationProps> = (props) => {

    const Navi = useNavigate()
    return (
       <Nav className = "d-flex align-items-center " style = {{ height: '10vh' }}>
            <div>
                <NavbarBrand style = {{ cursor: 'pointer' }}onClick = { () => Navi('/') } >Social Adjust</NavbarBrand>
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
