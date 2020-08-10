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
                  buildHookId: '5f3165b89ddc6a25b421cc35',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vmaboc83',
                  apiId: 'fe055184-fdff-4fa5-bfcc-3ab8c3c15055'
                },
                {
                  buildHookId: '5f3165b8065f7244e115fbd9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gc13hxp1',
                  apiId: 'c02ebffe-8439-4689-874a-4010ecf6db43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ziwar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gc13hxp1.netlify.app', category: 'apps' }
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
