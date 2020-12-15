import React, { useContext } from "react"
import reduce from 'lodash/reduce'
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link   } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import '../components.css';
import Search from '../../images/search.svg';
import Cart from '../../images/cart.svg';
import StoreContext from '../../context/StoreContext'
import { CartCounter, MenuLink } from '../Navigation/styles'
import AniLink from "gatsby-plugin-transition-link/AniLink"


import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Container
  } from "reactstrap";


const Header = () => {
	const useQuantity = () => {
		const {
			store: { checkout },
		} = useContext(StoreContext)
		const items = checkout ? checkout.lineItems : []
		const total = reduce(items, (acc, item) => acc + item.quantity, 0)
		return [total !== 0, total]
	}
  const data = useStaticQuery(graphql`
     query Header {
         allContentfulHeader {
           edges {
             node {
               topbar
               logo {
                 fluid {
                   src
                 }
               }
             }
           }
         }
     }
   `)



       const [isOpen, setIsOpen] = React.useState(false);const toggle = () => setIsOpen(!isOpen);
			 const [hasItems, quantity] = useQuantity()
			 return (
       	  <div>
            {data.allContentfulHeader.edges.map(({ node }) => (
              <div>
                <div className="top-bar">
           			  <p>{node.topbar}</p>
           		</div>
              <Container>

              <Navbar className="navbar-bg" color="light" light expand="md">
                <div className="main-logo display-block-mobile">
                    <AniLink paintDrip className="navbar-brand" to="/"	hex="#381928">
												 <h2>Barnes Jewellery</h2>
                  </AniLink>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                  <AniLink paintDrip className="nav-link"	to="/" hex="#381928">Home</AniLink>
                  </NavItem>
                  <NavItem>
                  <AniLink paintDrip className="nav-link" to="/products" hex="#381928">Products</AniLink>
                  </NavItem>
                  <NavItem>
                  <AniLink paintDrip className="nav-link" to="/services"	hex="#381928">Services</AniLink>
                  </NavItem>
									
                  <NavItem>
                  <AniLink paintDrip	className="nav-link" to="/about"	hex="#381928">About</AniLink>
                  </NavItem>
                  <NavItem>
                  <AniLink paintDrip className="nav-link" to="/contact"	hex="#381928">Contact</AniLink>
                  </NavItem>
                </Nav>
                </Collapse>
                <div className="main-logo display-none-mobile">
                  <AniLink paintDrip className="navbar-brand" to="/"	hex="#381928">
												 <h2>Barnes Jewellery</h2>


                  </AniLink>
                </div>


                <img src={Search} alt="search" className="search-icon"></img>
									<MenuLink to="/cart">
										{hasItems && <CartCounter>{quantity}</CartCounter>}
										<AniLink swipe className="cart-icon" to="/cart" ><img src={Cart} alt="cart" /></AniLink>
									</MenuLink>



              </Navbar>
              </Container>
         </div>
            ))}


       	  </div>
       	);


}

export default Header
