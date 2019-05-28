import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import BlogSlider from "../components/blogSlider/blogSlider"
import Newsletter from "../components/newsletter/newsletter"

const Post = () => {
    return (
        <Layout>
            <div className="grid">
                <BlogSlider />
                <Newsletter />
            </div>
        </Layout>
    )
}

export default Post