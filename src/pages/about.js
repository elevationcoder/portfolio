import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About the Developer</h1>
    <div className="about-info">
      <p>
        I am recent graduate from Flatiron School with a certificate in Full
        Stack Software Engineering. I have a passion for education and always
        learning new things. I love meeting new and exciting people from
        different backgrounds that I can learn from and work with.{" "}
      </p>
      <p>
        I have a background in logistics and by nature it was very
        detail-oriented and involved a fair amount of critical-thinking to solve
        issues that needed a quick resolution. It made me ambiguous and calm
        under pressure, seeing solutions where there were none and it helped me
        appreciate the value of team work and communication.
      </p>
      <p> I am always learning. No reason not too.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage
