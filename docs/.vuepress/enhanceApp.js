export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
  }) => {
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