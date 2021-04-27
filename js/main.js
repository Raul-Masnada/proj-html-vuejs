function initvue() {
    new Vue({
      el:"#app",

      data:{
        menu:[
          "home",
          "pages",
          "program",
          "tickets",
          "speakers",
          "papers",
          "blog",
          "shortcodes",
          "|",



      ]
      }
    })
}











function init() {
 initvue()


}
document.addEventListener('DOMContentLoaded', init);
