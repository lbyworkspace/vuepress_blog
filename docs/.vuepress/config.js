module.exports = {
    author:'阿元',
    title:'BaoStudy',
    theme:'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['script', { src:'/js/bodyclick.js'}],
        [
            "link",
            {
                "rel": "icon",
                "href": "https://www.zpzpup.com/assets/image/favicon.ico"
            }
        ],
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
        nav: [
            {
                text: "首页",
                link: "/",
                icon: "reco-home"
            },
            {
                text: "博客",
                link: "/"
            },
            {
                text: "教程",
                icon:'reco-category',
                items:[
                    {
                        text: "Web",
                        link: "/blogs/web/"
                    },
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
            ]
        }
    },
    // markdown: {
    //     lineNumbers: true,
    //     extractHeaders: [ 'h2' ]
    // },
    plugins:[
        [
          "dynamic-title",
          {
            showIcon: "/img/favicon.ico",
            showText: "欢迎回到",
            hideIcon: "/img/favicon.ico",
            hideText: "失联中......快回来~",
            recoverTime: 2000
          }
        ],
    ]
}
