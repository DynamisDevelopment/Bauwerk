import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import BlogSlider from "../components/blogSlider/blogSlider"

const Post = () => {
    return (
        <Layout>
            <div className="grid">
                <BlogSlider />
            </div>
        </Layout>
    )
}

export default Post