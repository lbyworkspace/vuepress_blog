export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
  }) => {
    // const root = '/blogs/'
    // const files = require.context('../blogs',true,/\.md$/)
    // var categroys = []
    // var ob = {}
    // files.keys().forEach(key=>{
    //     // console.log(key)
    //     // console.log(key.substring(0,key.lastIndexOf('/')+1).replace('.','/blogs'))
    //     // var catePath = key.substring(0,key.lastIndexOf('/')+1).replace('.','/blogs')
    //     // if(!categroys.find(v=>v==catePath)) categroys.push(catePath)
    //     // if(categroys.find(v=>v==key.replace(/\/.+\.md$/,''))==-1) 
    //     // console.log(key.replace('.','/blogs'),key.split(/r\//))
    //     let pathArr = key.split('/')
    //     const blog = root.concat(pathArr[1]+'/')
    //     const article = pathArr[2]
    //     console.log(blog)
    //     console.log(article)
    //     if(!categroys.find(v=>v==blog)) categroys.push(blog)
    //     console.log(Object.hasOwnProperty(blog))
    //     if(!Object.hasOwnProperty(blog)){
    //         Object.defineProperty(ob,blog,{})
    //         console.log(ob)
    //     }
    // })
    // console.log(categroys)
    router.afterEach((to,form,next)=>{
        if(to.path=='/'){
            const InterVal = setInterval(() => {
                if(document.getElementsByClassName('description')[1]){
                    document.getElementsByClassName('description')[1].addEventListener('click',function(){
                        window.scrollTo(0,window.innerHeight)
                    })
                    clearInterval(InterVal)
                }
            }, 1000);
        }
    })
    
  }