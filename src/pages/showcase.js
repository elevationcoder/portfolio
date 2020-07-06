import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShowcasePage = () => (
  <Layout>
    <SEO title="showcase" />
    <h1>My Project Showcase</h1>
    <div id="showcase-info">
      <p>
        Here are my top productions using a variety of skills and programming.
        The skills and languages include Ruby, Ruby on Rails, RESTful API's,
        PostgreSQL, JavaScript, React.js, React / Redux with Thunk, AJAX and
        JSON, HTML / CSS, Git, GitHub, Postman.{" "}
      </p>
    </div>
    <div className="video-container">
      <iframe
        title="ruby-gem"
        width="360"
        height="200"
        src="https://www.youtube.com/embed/LxgS3yhHdxM?start=5"
        frameborder="2"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="react-redux-app"
        width="360"
        height="200"
        src="https://www.youtube.com/embed/PijCOTJGsm8?start=5"
        frameborder="2"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="ruby-on-rails-app"
        width="360"
        height="200"
        src="https://www.youtube.com/embed/PAv_PqNHzQM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="squad-maker-app"
        width="360"
        height="200"
        src="https://www.youtube.com/embed/_6r4PqagEug"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ShowcasePage
