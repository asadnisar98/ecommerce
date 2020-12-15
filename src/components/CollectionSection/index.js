import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import '../components.css';
import Arrow from "../../images/right-arrow.png";
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
	Container, Row, Col
  } from "reactstrap";

const Homecollection = () => {
  const data = useStaticQuery(graphql`
    query Homecollection {
      allContentfulHomepage {
  edges {
    node {
      firstCollectionImage {
        fluid {
          src
        }
      }
      firstCollectionLink
      firstCollectionSubtext
      firstCollectionTitle
      secondCollectionBtnText
      secondCollectionImage {
        fluid {
          src
        }
      }
      secondCollectionLink
      secondCollectionSubtext
      secondCollectionTitle
      sectionSubText
      thirdCollectionBtnText
      thirdCollectionImage {
        fluid {
          src
        }
      }
      thirdCollectionLink
      thirdCollectionSubtext
      thirdCollectionTitle
      firstCollectionBtnText
    }
  }
}
    }
   `)



       return (
       	  <div>
            {data.allContentfulHomepage.edges.map(({ node }) => (
              <section className="collection">
  		<Container>
  			<Row className="justify-content-md-center">
  				<Col lg="4">
  				<div style={{ background: `url(${node.firstCollectionImage.fluid.src})` }} className="collection-box">
  					<div className="box-content">
  						<h2>{node.firstCollectionTitle}</h2>
  						<p>{node.firstCollectionSubtext}</p>
								<AniLink
									paintDrip  to="/" hex="#381928">{node.firstCollectionBtnText}</AniLink>
  					</div>
  				</div>
  				</Col>
  				<Col lg="4">
  				<div style={{ background: `url(${node.secondCollectionImage.fluid.src})` }} className="collection-box">
  					<div className="box-content">
  						<h2>{node.secondCollectionTitle}</h2>
  						<p>{node.secondCollectionSubtext}</p>
								<AniLink
									paintDrip  to="/" hex="#381928">{node.secondCollectionBtnText}</AniLink>
  					</div>
  				</div>
  				</Col>
  				<Col lg="4">
  				<div style={{ background: `url(${node.thirdCollectionImage.fluid.src})` }} className="collection-box">
  					<div className="box-content">
  						<h2>{node.thirdCollectionTitle}</h2>
  						<p>{node.thirdCollectionSubtext}</p>
								<AniLink
									paintDrip  to="/" hex="#381928">{node.thirdCollectionBtnText}</AniLink>
  					</div>
  				</div>
  				</Col>
  				<Col lg="7" className="text-center">
  					<div className="collection-about">
  						<p>{node.sectionSubText}</p>
  					</div>
  					<div className="collection-buttons">

							<AniLink
								paintDrip  to="/about" hex="#381928">About Barnes <img src={Arrow} /></AniLink>
  						<AniLink	paintDrip className="mr-0" to="/services" hex="#381928">Our Services <img src={Arrow} /></AniLink>
  					</div>
  				</Col>
  			</Row>
  		</Container>
  		</section>
            ))}


       	  </div>
       	);


}

export default Homecollection
