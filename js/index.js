var rem = 750;
        function refreshRem() {
            var winW = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = winW/rem * 100 + 'px';
        }
        refreshRem();
        window.addEventListener('resize', refreshRem);
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    onTransitionEnd:function (swiper) {
        //swiper.slides 获取一个对象数组， 滑块的长度
        var slides = swiper.slides,
            //滑块当前的索引值 curIndex
            curIndex = swiper.activeIndex,
            total = slides.length,
            targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case total - 1:
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides,function(item,ind){
            if(ind===curIndex){
                item.id=targetId;
            }else{
                item.id='';
            }
        })
    }
})

var omusic=document.getElementById('musicbox'),
    audioMusic=document.querySelector('.audio-music');
window.setTimeout(function(){
    audioMusic.play();
    omusic.style.opacity=1;
    audioMusic.addEventListener('canplay',function(){
        omusic.className='music-box music-play';
        omusic.style.opacity=1;
    })
})
omusic.onclick=function(){
    // console.log(1);
    if(audioMusic.paused) {
        omusic.className='music-box music-play';
        audioMusic.play();
    }else{
        omusic.className = 'music-box';
        audioMusic.pause();
    }
}


