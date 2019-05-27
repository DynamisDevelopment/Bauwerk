const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const teamTemplate = path.resolve('./src/templates/about.js')
    const team = await graphql(`
        query {
            allContentfulTeam{
                edges {
                  node {
                    slug
                  }
                }
              }
            }
        `)

    team.data.allContentfulTeam.edges.forEach(edge => {
        createPage({
            component: teamTemplate,
            path: `/team/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })


    const projectsTemplate = path.resolve('./src/templates/portfolioCase.js')
    const projects = await graphql(`
        query {
            allContentfulProjects{
                edges {
                node {
                    slug
                }
                }
            }
            }
        `)
    projects.data.allContentfulProjects.edges.forEach(edge => {
        createPage({
            component: projectsTemplate,
            path: `/projects/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })


    const postTemplate = path.resolve('./src/templates/post.js')
    const posts = await graphql(`
        query {
            allContentfulBlog{
                edges {
                node {
                    slug
                }
                }
            }
            }
        `)
    posts.data.allContentfulBlog.edges.forEach(edge => {
        createPage({
            component: postTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const projectsTemplate = path.resolve('./src/templates/portfolioCase.js')
//     const res = await graphql(`
//         query {
//             allContentfulProjects{
//                 edges {
//                   node {
//                     slug
//                   }
//                 }
//               }
//             }
//         `)

//     res.data.allContentfulProjects.edges.forEach(edge => {
//         createPage({
//             component: projectsTemplate,
//             path: `/projects/${edge.node.slug}`,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }