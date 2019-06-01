import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'
import SectionTitle from "../components/sectionTitle/sectionTitle"
import MediaBar from "../components/mediaBar/mediaBar"
import Slider from "react-slick"
import BlogSlider from "../components/blogSlider/blogSlider"
import Newsletter from "../components/newsletter/newsletter"
import Icons from "../components/socialIcons/socialIcons"

const Post = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlog(filter: {slug: { eq: "interiors" }}) {
            edges {
                node {
                    title 
                    description 
                    createdAt(formatString: "MMMM Do, YYYY")
                    mainImage {
                        file {
                            url
                        }
                    }
                    images {
                        file {
                            url
                        }
                    }
                    content {
                        json
                    }
                }
            }
        }
    }
    `)
    const post = data.allContentfulBlog.edges[0].node

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    return (
        <Layout>
            <div className="grid">
                <div className="blog-page">
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
                    <Slider {...settings} className="post-slider">
                        {post.images.map((image, index) => {
                            return <div className="post-image">
                                <img src={image.file.url} />
                            </div>
                        })}
                    </Slider>
                </div>
                <MediaBar />
                <SectionTitle section={""} title={"Reltated Posts"} subtitle={""} />
                <BlogSlider />
                <Newsletter />
            </div>
        </Layout>
    )
}

export default Post