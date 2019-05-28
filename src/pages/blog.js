import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Newsletter from "../components/newsletter/newsletter"
import MediaBar from "../components/mediaBar/mediaBar"

// Styles
import "../styles/_blog.sass"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlog{
      edges {
        node {
          title
          description 
          createdAt(formatString: "MMMM Do, YYYY") 
          slug 
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div className="grid">
        <SectionTitle section={"Blog"} title={"Blog List"} subtitle={"and News"} />
        <MediaBar />
        {data.allContentfulBlog.edges.map((edge, index) => {
          return <a href={"blog/" + edge.node.slug} className="blog-posts" key={index}>
            <img src={edge.node.thumbnail.file.url} />
            <div className="text-wrapper">
              <h3>{edge.node.createdAt}</h3>
              <h1>{edge.node.title}</h1>
              <p>{edge.node.description}</p>
              <div className="read-more">Read more <img src="../Assets/images/arrow.svg" className="rarrow" /></div>
            </div>
          </a>
        })}
        <Newsletter />
      </div>
    </Layout>
  )
}

export default BlogPage