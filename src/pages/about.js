import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About the Developer</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, soluta
      illum expedita quis laboriosam officia autem ratione, asperiores, adipisci
      provident tempore? Ipsam minima, doloremque dignissimos excepturi
      accusamus alias enim modi dolor ut esse tempora quibusdam mollitia ea
      veniam.{" "}
    </p>
    <p>
      Pariatur aliquid repellendus sed ut porro, recusandae id nulla delectus
      eos optio aliquam ad quasi voluptas labore consequuntur, ducimus eius
      eligendi blanditiis voluptatem similique voluptates! In ad omnis est
      provident nihil! Deleniti, quisquam cum ea, architecto iste maxime
      laudantium nulla itaque, reiciendis inventore repellat labore? Unde iure
      commodi fugiat voluptates voluptatum libero quod eligendi a? Ullam eum
      architecto assumenda. Accusantium, deleniti animi!
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
