module.exports = {
    author:'阿元搞全栈',
    title:'BaoStudy',
    theme:'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
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
                text: "教程",
                icon:'reco-category',
                items:[
                    {
                        text: "Java",
                        link: "/blogs/Java/Java简介"
                    }
                ]
            }
        ],
        sidebar:{
            '/blogs/Java/':[
                'Java简介',
                {
                    title:'Java初级',
                    collapsable:true,
                    children:[
                        'HelloWord','面向对象','类型和变量','修饰符','操作符','数组','类和对象'
                    ]
                },
                {
                    title:'Java中级',
                    collapsable:true,
                    children:[
                        '异常处理','集合框架','泛型','多线程','JDBC','Lambda'
                    ]
                },
                {
                    title:'Java高级',
                    collapsable:true,
                    children:[
                        '反射机制','注解'
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
                'dockerfile编写',
                {
                    title:'Docker',
                    collapsable:false,
                    children:[
                        'docker安装','docker基本命令'
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
