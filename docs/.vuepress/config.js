module.exports = {
    author:'阿元搞全栈',
    title:'BaoStudy',
    theme:'reco',
    head: [
        // ['meta',{ 'http-equiv':'Content-Security-Policy',content:'upgrade-insecure-requests'}],
        ['meta',{ name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['script', { src:'/js/bodyclick.js'}]
    ],
    themeConfig: {
        noFoundPageByTencent: false,
        modePicker:false,
        lastUpdated:"最后更新",
        author:'阿元搞全栈',
        type:'blog',
        authorAvatar: '/img/avatar.png',
        record: "BaoStudy.com — All Rights Reserved.",
        cyberSecurityRecord:'粤ICP备2021021642号',
        cyberSecurityLink:'https://beian.miit.gov.cn',
        startYear: "2021",
        smoothScroll: true,
        subSidebar: 'auto',
        blogConfig: {
            tag: {
                location: 2,
                text: '标签',
                icon:'reco-tag'
            }
        },
        nav: [
            {
                text: "首页",
                link: "/",
                icon: "reco-home"
            },
            {
                text: "笔记",
                link: "/notes/笔记前言",
                icon: "reco-home"
            },
            {
                text: "教程",
                icon:'reco-category',
                items:[
                    {
                        text: "Java",
                        link: "/courses/Java/Java简介"
                    },
                    {
                        text: "前端",
                        link: "/courses/前端/前端简介"
                    }
                ]
            }
        ],
        sidebar:{
            '/courses/Java/':[
                'Java简介',
                {
                    title:'Java初级',
                    collapsable:true,
                    children:[
                        'Java初级/HelloWord','Java初级/类和对象','Java初级/类型和变量',
                        'Java初级/修饰符','Java初级/控制流程','Java初级/数字与字符串',
                        'Java初级/日期时间','Java初级/面向对象'
                    ]
                },
                {
                    title:'Java中级',
                    collapsable:true,
                    children:[
                        'Java中级/异常处理','Java中级/集合框架','Java中级/泛型','Java中级/多线程','Java中级/JDBC','Java中级/Lambda'
                    ]
                },
                {
                    title:'Java高级',
                    collapsable:true,
                    children:[
                        'Java高级/反射机制','Java高级/注解'
                    ]
                },
                {
                    title:'Spring',
                    collapsable:true,
                    children:[
                        'Spring/入门'
                    ]
                },
            ],
            '/courses/前端/':[
                '前端简介',
                {
                    title:'Html',
                    collapsable:true,
                    children:[
                        'Html/选择编辑器','Html/Html简介','Html/Html标签','Html/Html表单'
                    ]
                },
                {
                    title:'CSS',
                    collapsable:true,
                    children:[
                        'Css/Css简介','Css/Css语法','Css/Css选择器','Css/Css样式表','Css/Css基本样式',
                        'Css/Css定位','Css/Css显示','Css/Css弹性盒子','Css/Css溢出'
                    ]
                },
            ],
            '/notes/':[
                '笔记前言',
                'flowable笔记',
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
