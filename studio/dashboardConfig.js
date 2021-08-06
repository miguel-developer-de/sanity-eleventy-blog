export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '610d90e2fdc6d3064dd40d47',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-cvj5uqv5',
                  apiId: '130133cc-5e15-480a-a8b0-ee7f6ee56a53'
                },
                {
                  buildHookId: '610d90e2f1508f0f87941781',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-sooppp1g',
                  apiId: '1b9b9994-0226-4d98-91d7-d85671f9874d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miguel-developer-de/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-sooppp1g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
