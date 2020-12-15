import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../components.css';
import insta from "../../images/insta-1.jpg";
import { Link, Img, useStaticQuery, graphql, } from "gatsby"
import {
	Col,
	Container, Row, Input, Button,
  } from "reactstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AboutInsatgram = () => {
  const data = useStaticQuery(graphql`
     query AboutInstagram {
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
          <section className="insta-outter">
  			  <Container>
  				  <Row className="justify-content-md-center">
  					  <Col lg="12" className="text-center">
  						  <div className="insta-heading">

  								<h2>Other Collections</h2>
  						  </div>

  					  </Col>
  				  </Row>

  				  <Row className="justify-content-md-center">
  						<Col lg="3" sm="6" xs="6">
								<AniLink
										paintDrip  to="/" hex="#381928">
  							<div className="insta-img">
  								<img className="w-100" src={insta} />
  							</div>
                </AniLink>
  						</Col>
  						<Col lg="3" sm="6" xs="6">
                <AniLink paintDrip to="/" hex="#381928">
  							<div className="insta-img">
  								<img className="w-100" src={insta} />
  							</div>
                </AniLink>
  						</Col>
  						<Col lg="3" sm="6" xs="6">
                <AniLink paintDrip to="/" hex="#381928">
  							<div className="insta-img">
  								<img className="w-100" src={insta} />
  							</div>
                </AniLink>
  						</Col>
  						<Col lg="3" sm="6" xs="6">
              <AniLink paintDrip to="/" hex="#381928">
  							<div className="insta-img">
  								<img className="w-100" src={insta} />
  							</div>
                </AniLink>
  						</Col>

              <Col lg="12">
  							<div className="insta-button text-center">
  								<a href="/">FOLLOW US ON INSTAGRAM</a>
  							</div>
  						</Col>
  				  </Row>
  			  </Container>
  		  </section>

       	  </div>
       	);


}

export default AboutInsatgram
