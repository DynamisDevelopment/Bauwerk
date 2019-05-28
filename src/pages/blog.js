import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Newsletter from "../components/newsletter/newsletter"

// Styles
import "../styles/index.sass"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Blog" />
      <div className="grid">
        <SectionTitle section={"Blog"} title={"Blog List"} subtitle={"and News"} />
        <Newsletter />
      </div>
    </Layout>
  )
}

export default BlogPage