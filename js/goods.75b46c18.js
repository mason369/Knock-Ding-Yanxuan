"use strict";(self["webpackChunkknock_ding_yanxuan"]=self["webpackChunkknock_ding_yanxuan"]||[]).push([[795],{1661:function(t,i,o){o.d(i,{Z:function(){return d}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"crumb"},[i("span",t._l(t.nav,(function(o,s){return i("span",{key:s,style:{color:s===t.nav.length-1?"#333":"#999"}},[t._v(" "+t._s(o.name)+" "),s!=t.nav.length-1?i("i",[t._v("/")]):t._e()])})),0)])},e=[],n={name:"Crumb",props:["nav"],data(){return{}}},l=n,c=o(1001),a=(0,c.Z)(l,s,e,!1,null,"26857958",null),d=a.exports},6574:function(t,i,o){o.d(i,{Z:function(){return d}});var s=function(){var t=this,i=t._self._c;return i("ul",{staticClass:"list"},t._l(t.arr,(function(s,e){return i("li",{directives:[{name:"show",rawName:"v-show",value:e<4,expression:"index < 4"}],key:s.id,on:{click:function(i){return t.goToDetails(s.id)}}},[i("section",[i("img",{attrs:{src:t.imgUrl+s.coverImg,alt:""}}),i("div",{staticClass:"bottom-box"},[i("h3",[t._v(t._s(s.name))]),i("p",[t._v(t._s(s.coin)+" 积分")]),i("div",{staticClass:"btn"},[t._v("立即兑换")])]),i("img",{staticClass:"flag",attrs:{src:o(750),alt:""}}),i("img",{staticClass:"flag",attrs:{src:o(1786),alt:""}})])])})),0)},e=[],n=(o(7658),{props:["arr"],data(){return{}},methods:{goToDetails(t){this.$router.push(`/detail?id=${t}`)}}}),l=n,c=o(1001),a=(0,c.Z)(l,s,e,!1,null,"bc3f6f4e",null),d=a.exports},3607:function(t,i,o){o.r(i),o.d(i,{default:function(){return A}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"goods"},[i("div",{staticClass:"wrap"},[i("Crumb"),i("img",{attrs:{src:o(7258),width:"100%",alt:""}}),i("ul",{staticClass:"options"},[i("li",[i("strong",[t._v("排序：")]),t._l(t.option1,(function(o,s){return i("span",{key:s,class:t.num1==s?"active":"",on:{click:function(i){return t.option1Click(s,o.min,o.max)}}},[t._v(" "+t._s(o.txt))])}))],2),i("li",[i("strong",[t._v("分类：")]),t._l(t.option2,(function(o,s){return i("span",{key:s,class:t.num2==s?"active":"",on:{click:function(i){return t.option2Click(s,o.type)}}},[t._v(" "+t._s(o.txt))])}))],2)]),i("List",{attrs:{arr:t.goodsListShow,maxLength:300}}),i("p",{staticStyle:{"text-align":"center","margin-top":"20px"}},[t._v(" "+t._s(t.isReachBottom?"已经没有数据了":"正在加载 ... ...")+" ")])],1)])},e=[],n=(o(7658),o(1661)),l=o(6574),c=o(735);function a(){var t=0;return document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t}function d(){var t=0;return t=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight),t}function h(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}var m={data(){return{goodsList:[],goodsListShow:[],size:8,page:1,isLoading:!1,isReachBottom:!1,did:0,type:0,min:0,max:0,keyword:"",option1:[{min:0,max:1e5,txt:"全部"},{min:0,max:0,txt:"我能兑换的"},{min:0,max:500,txt:"0-500分"},{min:500,max:1e3,txt:"500-1000分"},{min:1e3,max:1500,txt:"1500-2500分"},{min:2500,max:6500,txt:"2500-6500分"},{min:6500,max:1e4,txt:"6500-10000分"}],option2:[{type:0,txt:"全部"},{type:1,txt:"实物商品"},{type:2,txt:"虚拟商品"}],num1:0,num2:0}},created(){this.keyword=this.$route.query.keyword||"",this.goodsSearch()},mounted(){window.addEventListener("scroll",this.scrollFn)},beforeDestroy(){window.removeEventListener("scroll",this.scrollFn)},watch:{"$route.query.keyword":{handler(t,i){this.keyword=t,this.goodsSearch()}}},methods:{scrollFn(){if(d()+a()>=h()-20){if(this.goodsListShow.length>=this.goodsList.length)return void(this.isReachBottom=!0);0==this.isLoading&&(this.isLoading=!0,this.page++,setTimeout((()=>{for(var t=this.size*(this.page-1);t<this.size*this.page;t++)this.goodsList[t]&&this.goodsListShow.push(this.goodsList[t]);this.isLoading=!1}),500))}},option1Click(t,i,o){this.num1=t,this.min=i,this.max=o,this.goodsSearch()},option2Click(t,i){this.num2=t,this.type=i,this.goodsSearch()},async goodsSearch(){let t=await(0,c.h0)({did:this.did,type:this.type,min:this.min,max:this.max,keyword:this.keyword});t&&(this.goodsList=t.data,this.goodsListShow=this.goodsList.filter(((t,i)=>i<this.size)),this.isReachBottom=!1,this.page=1,this.goodsListShow.length>=this.goodsList.length&&(this.isReachBottom=!0))}},components:{Crumb:n.Z,List:l.Z}},r=m,u=o(1001),g=(0,u.Z)(r,s,e,!1,null,"21594ee0",null),A=g.exports},7258:function(t,i,o){t.exports=o.p+"img/banner.4c6b6225.11adce36.png"},1786:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJBODRDNDhGNkNFMTExRUFCNTVCQTA4NkEzNzcxNEMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJBODRDNDkwNkNFMTExRUFCNTVCQTA4NkEzNzcxNEMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkE4NEM0OEQ2Q0UxMTFFQUI1NUJBMDg2QTM3NzE0QzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkE4NEM0OEU2Q0UxMTFFQUI1NUJBMDg2QTM3NzE0QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz68TmRCAAADUUlEQVR42uTYXYhMYRgH8P8MWS2xpdGuskpt7CwX0tpI9oOUfO7VqgmlrXGx3K6i7FwoItKi3PhICqVQ5EKbcCMXGxs2pXZdrOyiyE42F+M8nt72nbPnzJzv95wzT01nPrZtfvM87/M+70kUTjQWEP/IJSsBqT36kpWApCfJSkAGB125B+g4pgxJMTsQZOdx4OuIMqT/GZWRdw4rQ/oLFcipSUZOflGG9A8qkFXVwIIU0HJQKdIfqFyul7qAXxPApoyfzags0h9oR3Z6TU4MAVf2+om1hKRIeD4Czqvjq7wm6b3sbS7j57eAgZOBIr3NaGo1UN/GQH3jodfeZtYW0pt9dMMRoHU/Nx6KqTzw9inw7EIxWGAps4SlcJZZ20j3pbv9FNC8CxgfBUbf8Hsr1nOJUvZu9vA61Ze28zJ2hHRXutRdCTk0AFzeBjw6yo9zrQwgSPc1LmmzMq5rCATpLqOZ60DDOuDMZuNhYM0BYHcvZ5t+CKOmZX2IcIV0l9Gq+ZwVsy87eAN4/RBYvIzR+ggQ6b7rUnmK7cQoqCH9z+7OwLqr99CRQb6WGu8oa1S6NSmlSHtQ2iPl7L26yqXb0smfmcVcbdv5k1eKtA6lzpk5C3T1F08+j8/z/kmfURc26sxU3sMvlSIpZvW1pcr/0/w4sHA5kN4ILG0GPr4A/v4Gvg0DP7VrUzuwSuu+ixqBwhyguhZYqw0FW7S598cYcDerFGl/exEDwuf3xWdMKt0dvdxh5dD/nSKks33UDCtKdUkTPx97p5XsfeWZLA2lL/z908zxTR4E7GdMGdK4GVGzoYPzvosz90iBJCCNfvXp4gYVUqQxlLLzpJ+7JQ3fAiEjKYv3enjycY7NJXIfAkGaby80vj04PY2lo5iMFKVKQ7wzbKDI0udRwlIQcOsh8/VIWIqaWsvdNWhk+YO3jC01xglsSJHWJiN9GbtoPKqQ1kdA91ilSHtDvXOscqT9m2NizabbQ914vL85FpJhwP87DBFB+gUNHdIPaCiRXkNDi/QSGmqkV9DQI72ARgLpFhoZpBtopJBOoZFDOoFGEmkXGlmkHWikkVahkUdagcYCWQ4aG2QpaKyQZtDYIY2gsUTqobFFytBYIwU09kiKfwIMAA5wUx9lSYhSAAAAAElFTkSuQmCC"},750:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAETUlEQVRogeXZT0gUURwH8G9mYWIitQeVzQoDJSzIJCIR9GCHoLp0KDtVRIF2ke7qLSS8ZIcOdcs6dKnoUAYJYoewEvSgUhGymMQapmKLScX37b5xdp3/ztvdmX4QuzM7677P/H7v995uW5qG2/8i/NFT8D8gAXSHHSqQfBJmqIZEiKFpSIQUugGJbEBvHriAhrIa1R8jwxAJ1VAiz5Q3oq/uRjawpkiohErkva9PMbU8oxpriYQqqETe/vQID2OD6JzoN8TyGh/CFskoVIl8Njcizi2trWBp7VfadRK9s7BY3AyP4QgJvzNqhNSjOifuYHRhSjt+E/+Ia/vO4mK01cvHOUbCz4xy4ERy8E6Q8ng62iqwDBeZdYVkbN17+ZirN5jFbGIeq39+41xls3gcX/xii2Twuu0F23Cp6pT2Pr+R8HuOyowwQ6fLG1FZFElDDcReCWhb9KR2jlFTUiUe26KtoiJmE3Gzj/CEhNeMsoHsL67A/OrPDa8xI8xMS6Q+LZOHSqvxZHYI44ufRfZ4/PbHBG4dvK5leSD2WgmS4en76IvjvQLQNXnf9Bpmk4PWLymcu2xUPOZ5dmPeNH3WTWJTSHjpuuyQHBw3AlahRxJCIJsVOzNRPMe/w/VVNRJu5ygHxnnEuagvMWavsmi3NmBe11N7JaPxJF8jlEE4X+N7LcIXpGsoB0+gPpscaF9dhyjD0bFecY7PjYKlyyYld0TEyhtg9HF+IeGmdAmqKdmTtsORyGR37U+7PnNJQWpNZYdlRQzFP1h9nK9IOO26snmw+XCdbCirTa2THeJ1lioBL7+/S3sfj9ld2WVP7KrD4dJqcQOez42IddckfEfCKqNcC1mqbD6yQyabSL/I7OOGbnHu6livGLy8GZkhM8sbwZK3azzDTXd9R8KudDl4grmIszxlCfJYbtTXb4A91mzupkIZElbQ9wuT2jLCkuVAiZblKjMrYU6w+j1wRihFwgxqNFg2D5Yfs8luyeVkIDaoZR0OsCahHAmrjDKT7I5EcCckMcRxeeD8RWqJ4DyWZa3HOvhFIStIONkCtkSOCBQzyVJlOfMfy/BbIi7OcxPADJ8fXR8zr/E6J5uG272LTMKyGXGwRBDFecplQQKml2fELondl0g2K/1PI7lsPEZhuTPiYGUjIoLly3Jmlonk0pLM8A5xQ5oj9VYNR0bWkXCyM5JroMwsn3dNPhCvaVu/hSltPbWJnCDhdAvIbxjyGwjnaXKzntzyyeXGplSRSyTc7HXljoaPR8tqUxuGFSdA5BoJLz+lsAlVpL5aDWX8EGYSOUfC6y8MLkLJBt1LqPy/l7xBQiE0r5BQBM07JBRA8xIJn6F5i4SP0LxGwido3iPhAzQQSGwSGhgkNgENFBIeoYFDwgM0kEi4hAYWCRfQQCPhEBp4JBxAQ4GEDTQ0SFhAQ4WECTR0SBhAQ4lEBjS0SOigoUYyCA09EgD+AbnebiTE0WsFAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=goods.75b46c18.js.map