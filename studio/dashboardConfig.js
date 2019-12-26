export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0525904e46f0da0c664f61',
                  title: 'Sanity Studio',
                  name: 'sanityGatsbyBlog-studio-dq9u2i4b',
                  apiId: '2a4a3f0a-f0ad-463d-8a9d-96d05551042e'
                },
                {
                  buildHookId: '5e05259099332e68aeb5fe52',
                  title: 'Blog Website',
                  name: 'sanityGatsbyBlog-web',
                  apiId: '93a19264-1c2c-45db-86d6-5e17a628467e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uguroksuz/sanityGatsbyBlog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanityGatsbyBlog-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
