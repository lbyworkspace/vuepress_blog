window.onload  = function () {
    function getRandomColor(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var body = document.body
    body.onclick = function (e) {
        var e = e || window.event;
        var $w = document.createElement('span')
        $w.innerHTML = "❤"
        $w.style.zIndex = 99999
        $w.style.top = e.pageY - 20 + 'px'
        $w.style.left = e.pageX + 'px'
        $w.style.position = "absolute"
        $w.style.fontWeight = "blod"
        $w.style.color = `rgb(${getRandomColor(255,0)},${getRandomColor(255,0)},${getRandomColor(255,0)})`
        $w.style.userSelect = "none"
        $w.style.cursor = "default"
        $w.style.opacity = 1
        $w.style.transition = "all 1s"
        body.appendChild($w)
        var timer = setTimeout(() => {
            $w.style.top = e.pageY - 180 + 'px'
            $w.style.opacity = 0
            clearTimeout(timer)
            var cleartimer = setTimeout(() => {
                body.removeChild($w)
                clearTimeout(cleartimer)
            },1000)
        })
    }

    document.querySelector('.site-name').addEventListener('click',()=>{
        document.body.scrollIntoView(false)
    })

}