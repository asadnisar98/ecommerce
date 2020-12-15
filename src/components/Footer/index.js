import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../components.css';
import Logo from "../../images/barns-logo.png";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Payments from "../../images/payments.png";
import { Link, Img, useStaticQuery, graphql, } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
	Col,
	Container, Row, Input, Button,
  } from "reactstrap";


const Footer = () => {
  const data = useStaticQuery(graphql`
     query Footer {
  allContentfulFooter {
    edges {
      node {
        aboutText
        facebookLink
        twitterLink
        openingHourWednesday
        openingHourTuesday
        openingHourSunday
        openingHourThursday
        openingHourSaturday
        openingHourMonday
        openingHourFriday
      }
    }
  }
}

   `)

			 return (
       	  <div>
            {data.allContentfulFooter.edges.map(({ node }) => (
              <footer className="main-footer">
  			<Container>
  				<div className="footer-top">
  					<Row>
  						<Col lg="8">
  							<div className="footer-top-left">
  								<p>Join our mailing list for special offers and latest news from Barnes Jewellery</p>
  							</div>
  						</Col>
  						<Col lg="4">
  							<div className="footer-top-right">
  								<Input type="text" placeholder="Your e-mail"></Input> <Button>Sign up</Button>
  							</div>
  						</Col>
  					</Row>
  				</div>
  				<div className="footer-middle">
  					<Row>
  						<Col lg="4">
  							<div className="footer-about">
  								<h2>Barnes Jewellery</h2>
  								<p>{node.aboutText}</p>
  								<ul>
  									<li><a  href={node.facebookLink}><img src={Facebook} /></a></li>
  									<li><a href={node.twitterLink}><img src={Twitter} /></a></li>
  								</ul>
  							</div>
  						</Col>
  						<Col lg="4">
  							<div className="quick-links">
  								<h2>Shop</h2>
  								<ul>
  									<li><AniLink
												paintDrip  to="/" hex="#381928">Home</AniLink></li>
  									<li>	<AniLink
												paintDrip  to="/products" hex="#381928">Shop</AniLink></li>
  									<li>	<AniLink
												paintDrip  to="/refundpolicy" hex="#381928">Refund Policy</AniLink></li>
  									<li>	<AniLink
												paintDrip  to="/termsandconditions" hex="#381928">Terms and Conditions</AniLink></li>
  									<li>	<AniLink
												paintDrip  to="/privacypolicy" hex="#381928">Privacy Policy</AniLink></li>
  									<li>	<AniLink
												paintDrip  to="/shippingpolicy" hex="#381928">Shipping Policy</AniLink></li>
  								</ul>


  							</div>
  						</Col>
  						<Col lg="4">
  							<div className="quick-links">
  								<h2>Opening Hours</h2>
  								<ul>
  									<li><p>Monday:  {node.openingHourMonday}</p></li>
  									<li><p>Tuesday:  {node.openingHourTuesday}</p></li>
  									<li><p>Wednesday:  {node.openingHourWednesday}</p></li>
  									<li><p>Thursday:  {node.openingHourThursday}</p></li>
  									<li><p>Friday:  {node.openingHourFriday}</p></li>
  									<li><p>Saturday:  {node.openingHourSaturday}</p></li>
  									<li><p>Sunday:  {node.openingHourSunday}</p></li>
  								</ul>
  							</div>
  						</Col>
  					</Row>
  				</div>
  				<div className="footer-bottom">
  					<Row>
  						<Col lg="6">
  							<div className="bottom-footer-left">
  								<p>Copyright © 2020 Barnes Jewellery. All rights reserved.</p>
  							</div>
  						</Col>
  						<Col lg="6">
  							<div className="bottom-footer-right">
  								<img src={Payments} />
  							</div>
  						</Col>
  					</Row>

  				</div>
  			</Container>
  		  </footer>
            ))}


       	  </div>
       	);


}

export default Footer
