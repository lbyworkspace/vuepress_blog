module.exports = {
    author:'阿元搞全栈',
    title:'BaoStudy',
    theme:'reco',
    head: [
        ['meta',{ 'http-equiv':'Content-Security-Policy',content:'upgrade-insecure-requests'}],
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
            },
            category: {
                location: 2,
                text: "分类",
                icon: "reco-menu",
            },
        },
        valineConfig: {
            appId: 'bg15QCQqUNoON4gP1xSPRviz-gzGzoHsz',
            appKey: 'xtnkTLsNXYUKTpPIhxjr0y6c'
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
                    },
                    {
                        text: "Maven",
                        link: "/courses/Maven/Maven简介"
                    },
                    // {
                    //     text: "服务器",
                    //     link: "/courses/服务器/服务器简介"
                    // },
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
                    title:'Css',
                    collapsable:true,
                    children:[
                        'Css/Css简介','Css/Css语法','Css/Css选择器','Css/Css样式表','Css/Css基本样式',
                        'Css/Css定位','Css/Css显示','Css/Css弹性盒子','Css/Css溢出','Css/Css对齐',
                        'Css/Css伪元素','Css/Css进阶样式'
                    ]
                },
                {
                    title:'JavaScript',
                    collapsable:true,
                    children:[
                        'Js/Js简介.md','Js/Js用法','Js/Js调试','Js/Js变量','Js/Js数据类型','Js/Js函数','Js/Js正则表达式','Js/Js this',
                        'Js/Js JSON','Js/Js定时器','Js/Js Promise','Js/Js对象','Js/Js字符串','Js/Js数组','Js/Js日期','Js/Js Math',
                        'Js/Js DOM','Js/Js BOM','Js/Js深浅拷贝'
                    ]
                },
                {
                    title:'Vue',
                    collapsable:true,
                    children:[
                        'Vue/Vue简介.md','Vue/Vue模版语法.md',
                        {
                            title:'Vue2',
                            collapsable:true,
                            children:[
                                'Vue/Vue2/Vue2安装.md'
                            ]
                        },
                        {
                            title:'Vue3',
                            collapsable:true,
                            children:[
                                'Vue/Vue3/Vue3简介.md','Vue/Vue3/Vue3创建.md','Vue/Vue3/Vue3响应式原理','Vue/Vue3/Vue3 Composition API'
                            ]
                        }
                    ]
                },
                {
                    title:'TypeScript',
                    collapsable:true,
                    children:[
                        'Ts/Ts简介.md','Ts/Vue2中使用Ts'
                    ]
                },
            ],
            '/courses/Maven/':[
                'Maven简介','Maven环境配置','Maven生命周期','Maven入门'
            ],
            '/courses/服务器/':[
                '服务器简介',
                {
                    title:'Tomcat',
                    collapsable:true,
                    children:[
                        'Tomcat/Tomcat简介'
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
