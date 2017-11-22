<template>
<div>
    <!--LayerSlider begin-->
    <!-- Note: Layerslider is configured in js/grove-slider.js -->
    <div class="hidden-xs">
        <div id="layerslider" style="width: 100%; height: 405px; margin: 0px auto;">
            <LatestBookSlide/>
            <LatestReadingSlide/>
            <RandomBookSlide/>
            <ForgottenBookSlide/>
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
import ForgottenBookSlide from '@/components/ForgottenBookSlide';

export default {
  name: "Slider",
  components: {
      LatestBookSlide,
      LatestReadingSlide,
      RandomBookSlide,
      ForgottenBookSlide,
  }

};
</script>

