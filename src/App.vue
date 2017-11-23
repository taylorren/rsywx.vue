<template>
  <div id="app">
    <router-view/>
    <footer class="widewrapper footer">
    <div class="container">
        <div class="row footer">
            <div class="col-sm-6">
                <h4>版权说明</h4>
                <p>
                    <a href="/">任氏有无轩</a>，V6.0，1989 - {{new Date().getFullYear()}}，基于<a href="https://nodejs.org/en/">Node.js</a> + <a href="https://vuejs.org/">Vue.js</a>开发<br>
                    其它技术：<a href="http://getbootstrap.com/">Bootstrap</a><br>
                    <a href="http://validator.w3.org/check?uri=referer"><img src="/img/valid-xhtml10-blue.png" alt="Valid XHTML 1.0 Transitional" height="31" width="88" /></a><br>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nd/3.0/deed.zh"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/3.0/80x15.png" /></a>&nbsp;&nbsp;除非另有显式声明，本作品均采用<a rel="license" href="http://creativecommons.org/licenses/by-nd/3.0/deed.zh">知识共享署名-禁止演绎 3.0 Unported许可协议</a>进行许可。
                </p>
                <p><small>推荐使用Chrome，FireFox等现代浏览器浏览，分辨率1680*1050以上。对于IE浏览器的兼容性，本站点未做任何测试。</small></p>

            </div>
            <div class="col-sm-3">
                <h4>社交网络</h4>
                <a href="https://plus.google.com/+TaylorRen" class="social google_plus"></a>
                <a href="https://www.facebook.com/taylor.ren" class="social facebook"></a>
                <a href="https://twitter.com/taylorren" class="social twitter"></a>
                <a href="https://www.linkedin.com/profile/view?id=52695722" class="social linked_in"></a>
            </div>            
			<div class="col-sm-3">
                <h4>安全站点</h4>
                本站点为安全站点，采用HTTPS证书保护。<br>
				<a href="https://www.positivessl.com" style="font-family: arial; font-size: 10px; color: #212121; text-decoration: none;"><img src="https://www.positivessl.com/images-new/PositiveSSL_tl_trans.png" alt="Positive SSL on a transparent background" title="Positive SSL on a transparent background" /></a>
            </div>            
        </div>
    </div>

    <div class="container">
        <div class="copyright">
            <p>Originated from <a href="http://hackerthemes.com">HackerThemes</a>. Customized by <a href="http://www.rsywx.net">RSYWX.net</a>.</p>
        </div>
    </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>