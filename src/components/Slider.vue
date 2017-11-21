<template>
<div>
    <!--LayerSlider begin-->
    <!-- Note: Layerslider is configured in js/grove-slider.js -->
    <div class="hidden-xs">
        <div id="layerslider" style="width: 100%; height: 405px; margin: 0px auto;">
            <div class="ls-slide" data-ls="transition2d:5;">
                <img class="ls-bg" src="img/slides/bg-five.jpg" alt="Slider Background">

                <img  class="ls-l" src="img/slides/imac.png" alt="iMac" 
                      style="top:15px; left:650px;"
                      data-ls=" durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right; ">

                <div class="ls-l large-caption" 
                     style="top:150px; left:20px;"
                     data-ls="delayin: 750; offsetxin: 0; offsetxout: 0;">
                    <div><p>Impress your visitors,</p></div>
                    <div><p>and turn them into clients!</p></div>
                </div>
            </div>

            <div class="ls-slide" data-ls="transition2d:5;">
                <img class="ls-bg" src="img/slides/bg-one.jpg" alt="Slider Background">

                <img  class="ls-l" src="img/slides/fam_imac.png" alt="iMac" 
                      style="top:50px; left:50px;"
                      data-ls=" durationin : 2000; delayin : 0; offsetxin: left;  offsetxout: left;">
                <img  class="ls-l" src="img/slides/fam_macbook.png" alt="MacBook" 
                      style="top:190px; left:250px;"
                      data-ls="durationin : 2000; durationout: 2000; delayin : 300; offsetxin: 300; offsetyin: 300; offsetxout: left;">
                <img  class="ls-l" src="img/slides/fam_ipad.png" alt="iPad" 
                      style="top:210px; left:0px;"
                      data-ls="durationin : 2000; durationout: 2000; delayin : 300; offsetxin: -300; offsetyin: 300; offsetxout: left;">
                <img  class="ls-l" src="img/slides/fam_iphone.png" alt="iPhone" 
                      style="top:265px; left:160px;"
                      data-ls="durationin : 2000; durationout: 2000; delayin : 300; offsetxin: 0; offsetyin: 300; offsetxout: left;">

                <div class="ls-l large-caption" 
                     style="top:150px; left:700px;"
                     data-ls="delayin:750; offsetxin: 0; offsetxout: 0;">
                    <div><p>Create a stunning website</p></div>
                    <div><p>with Grove. </p></div>
                </div>

            </div>   

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
            <h1>Welcome to Grove!</h1>        
        </div>
    </div> 
    </div>
   
</template>

<script>
export default {
  name: "Slider"
};
</script>

