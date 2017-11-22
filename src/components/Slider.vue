<template>
<div>
    <!--LayerSlider begin-->
    <!-- Note: Layerslider is configured in js/grove-slider.js -->
    <div class="hidden-xs">
        <div id="layerslider" style="width: 100%; height: 405px; margin: 0px auto;">
            <LatestBookSlide/>
            <LatestReadingSlide/>
            <RandomBookSlide/>
            
             <div class="ls-slide" data-ls="transition2d:5;">
                <img class="ls-bg" src="img/slides/bg-three.jpg" alt="Slider Background">

                <img  class="ls-l" src="img/slides/macbook-air.png" alt="MB Air" 
                      style="top:25px; left:50px;"
                      data-ls="durationin: 2500; offsetxin: left; offsetxout: left;">

                <div class="ls-l large-caption" 
                     style="top:120px; left:750px;"
                     data-ls="delayin: 750; offsetxin: 0; offsetxout: 0;">
                    <div><p>Layerslider:</p></div>
                    <div><p>Highly configurable,</p></div>
                    <div><p>flexible and fast</p></div>
                </div>
            </div>
        </div>
    </div>
    
    <!--LayerSlider end-->
    <!-- Layerslider substitute on x-small devices -->
    <div class="widewrapper pagetitle visible-xs">
        <div class="container">
            <h1>欢迎来到任氏有无轩！</h1>        
        </div>
    </div> 
    </div>
   
</template>

<script>
import LatestBookSlide from '@/components/LatestBookSlide';
import LatestReadingSlide from '@/components/LatestReadingSlide';
import RandomBookSlide from '@/components/RandomBookSlide';

export default {
  name: "Slider",
  components: {
      LatestBookSlide,
      LatestReadingSlide,
      RandomBookSlide,
  }

};
</script>

