module.exports = {
    author:'阿元',
    title:'BaoStudy',
    theme:'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['script', { src:'/js/bodyclick.js'}]
    ],
    themeConfig: {
        noFoundPageByTencent: false,
        modePicker:false,
        lastUpdated:"Last Updated",
        author:'阿元搞全栈',
        type:'blog',
        authorAvatar: '/img/avatar.png',
        record: "BaoStudy.com — All Rights Reserved.",
        cyberSecurityRecord:'粤ICP备2021021642号',
        cyberSecurityLink:'https://beian.miit.gov.cn',
        startYear: "2021",
        subSidebar: 'auto',
        smoothScroll: true,
        blogConfig: {
            tag: {
                location: 2,
                text: '博客',
                icon:'reco-blog'
            }
        },
        nav: [
            {
                text: "首页",
                link: "/",
                icon: "reco-home"
            },
            {
                text: "教程",
                icon:'reco-category',
                items:[
                    // {
                    //     text: "Web前端",
                    //     link: "/blogs/web/one"
                    // },
                    // {
                    //     text: "Java",
                    //     link: "/blogs/web/one"
                    // },
                    {
                        text: "Docker",
                        link: "/blogs/docker/docker安装"
                    },
                    // {
                    //     text: "Mysql",
                    //     link: "/blogs/web/one"
                    // },
                    // {
                    //     text: "Maven",
                    //     link: "/blogs/web/one"
                    // },
                    // {
                    //     text: "Spring全家桶",
                    //     link: "/blogs/web/one"
                    // }
                ]
            }
        ],
        sidebar:{
            '/blogs/java/':[
                {
                    title:'JAVA',
                    collapsable:false,
                    children:[
                        'one','two'
                    ]
                },
            ],
            '/blogs/web/':[
                {
                    title:'WEB',
                    collapsable:false,
                    children:[
                        'one','two'
                    ]
                },
            ],
            '/blogs/docker/':[
                {
                    title:'Docker',
                    collapsable:false,
                    children:[
                        'docker安装','docker基本命令','dockerfile编写'
                    ]
                },
            ]
        }
    },
    plugins:[
        [
          "dynamic-title",
          {
            showIcon: "/img/favicon.ico",
            showText: "欢迎回到",
            hideIcon: "/img/favicon.ico",
            hideText: "亲亲,快回来~",
            recoverTime: 2000
          }
        ],
        ['@vuepress/medium-zoom', {
            selector: '.page img',
            options: {
                margin: 80,
                scrollOffset: 0,
                background: 'rgba(25,18,25,0.9)',
                scrollOffset: 75,
            },
        }]
    ]
}
