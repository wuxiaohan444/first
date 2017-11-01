/**
 * Created by 吴晗 on 2017/11/1 0001.
 */
var gallery = mui('.mui-slider');
gallery.slider({
    interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});
