import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SectionTitle from "../components/sectionTitle/sectionTitle"
import MediaBar from "../components/mediaBar/mediaBar"
import Slider from "react-slick"
import BlogSlider from "../components/blogSlider/blogSlider"
import Newsletter from "../components/newsletter/newsletter"
import Icons from "../components/socialIcons/socialIcons"
import { DiscussionEmbed } from "disqus-react"

// Styles 
import "../styles/_post-template.sass"

export const posts = graphql`
    query($slug: String!) {
        contentfulBlog(slug: { eq: $slug}) {
            title 
            description 
            slug
            createdAt(formatString: "MMMM Do, YYYY")
            mainImage { file { url } }
            images { file { url } }
            content { json }
        }
    }
    `

const Post = props => {
    const post = props.data.contentfulBlog

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.slug },
    }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    return (
        <Layout>
            <div className="grid blog-page">
                <div className="blog-section">
                    <h4 className="path">Home / Blog list and news /  {post.title}</h4>
                    <SectionTitle section={"Blog"} title={""} subtitle={""} />
                    <h1 className="title">{post.title}</h1>
                    <h4 className="posted">{post.createdAt}</h4>
                    <img className="main-image" src={post.mainImage.file.url} />
                    {documentToReactComponents(post.content.json)}
                    <div className="share">
                        <h2>Share: </h2>
                        <Icons />
                    </div>
                    {post.images && <Slider {...settings} className="post-slider">
                        {post.images.map((image, index) => {
                            return <div className="post-image" key={index}>
                                <img src={image.file.url} />
                            </div>
                        })}
                    </Slider>}
                </div>
                <MediaBar />
                <SectionTitle section={""} title={"Reltated Posts"} subtitle={""} />
                <BlogSlider />
                <div className="comments"><DiscussionEmbed {...disqusConfig} /></div>
                <Newsletter />
            </div>
        </Layout>
    )
}

export default Post