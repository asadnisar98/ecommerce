import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../components.css';
import aboutbanner from "../../images/about-banner.jpg";
import { Link, Img, useStaticQuery, graphql, } from "gatsby"
import {
	Col,
	Container, Row, Input, Button,
  } from "reactstrap";


const AboutHeader = () => {
  const data = useStaticQuery(graphql`
     query AboutHeader {
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
          <section style={{ background: `url(${aboutbanner})` }} className="about-banner-outter">
				<Container>
					<Row>
						<Col lg="6">
							<div className="about-banner-inner">
								<span>ABOUT BARNES</span>
								<h2>Barnes Jewellery was stablished in 1991 and are proud to be a local independent business based in Barnes Village, London SW13.</h2>
								<p>We have a beautifully edited selection of jewellery from stunning diamond engagement rings to fabulous watches from the world’s finest horologists. Our Barnes showroom also stocks a wide range of gifts for every occasion, including traditional christening items to one-off pieces for that special present.</p>
							</div>
						</Col>
					</Row>
				</Container>
		  </section>

       	  </div>
       	);


}

export default AboutHeader
