<template>
  <section id="home">
    <HomeHeader/>
  <div class="container">
      <div class="gun">
        <div class="home-box">
          <!-- banner区 -->
          <div class="home-banner">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          <img src="./images/01.jpg"/>
                      </div>
                      <div class="swiper-slide">
                      <img src="./images/02.jpg"/>
                      </div>
                      <div class="swiper-slide">
                      <img src="./images/03.jpg"/>
                      </div>
                      <div class="swiper-slide">
                          <img src="./images/04.jpg"/>
                      </div>
                      <div class="swiper-slide">
                          <img src="./images/05.jpg"/>
                      </div>
                  </div>
                  <!-- 如果需要分页器 -->
                  <div class="swiper-pagination"></div>
              </div>
          </div>
          <!-- 图标区 -->
          <div class="home-service-procity">
              <ul class="service">
                  <li v-for="(item, index) in homeData.policyDescList" :key="index">
                      <i class="iconfont icon-wangyi0"></i>
                      <span>{{item.desc}}</span>
                  </li>
                  
              </ul>
              <ul class="procity">
                  <li v-for="(list, index) in homeData.kingKongModule.kingKongList" :key="index">
                      <a href="javascript">
                        <img class="img" :src="list.picUrl">
                        <div>{{list.text}}</div>
                      </a>
                  </li>
                     
              </ul>
          </div>
          <!-- 新人专享 -->
          <div class="freshmanModule">
              <div class="freshman">- 新人专享礼 -</div>
              <div class="man">
                  <div class="left">
                      <div class="name" >新人专享礼包</div>
                      <div class="imgWrap">
                        <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
                      </div>
                          
                  </div>
                  <div class="right">
                      <div class="right-top">
                          <div class="shoes">
                              <h1>福利社</h1>
                              <h2>今日特价</h2>
                          </div>
                          <div class="imgWrap">
                              <img src="https://yanxuan-item.nosdn.127.net/81e3c70911ba7b4b3a5a6e40be3f2b27.png"/>
                          </div>
                          <div class="scroil">
                              <span>￥24.6</span>
                              <b>￥32.9</b>
                          </div>
                      </div>
                      <div class="right-bottom">
                          <div class="one-shoes">
                              <h1>新人拼团</h1>
                              <h2>1元起包邮</h2>
                          </div>
                          <div class="imgWrap">
                              <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png"/>
                          </div>
                          <div class="scroil">
                                  <span>￥24.6</span>
                                  <b>￥32.9</b>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- 品牌制造商直供 -->
          <div class="manu-facturers-supplying">
              <div class="manu-title">
                  <h1>品牌制造商直供</h1>
                  <div class="title-icon">
                      <span>更多</span>
                      <i class="iconfont icon-zuojiantou"></i>
                  </div>
              </div>
              <div class="manu-supplying">
                  <ul clsaa="supplyList">
                      <li>
                          <div class="supplyItem">
                                  <h2>海外制造商</h2>
                                  <span>9.9元起</span>
                                  <span class="up">上新</span>        
                          </div>
                          
                      </li>
                      <li>
                          <div class="supplyItem">
                                  <h2>CK制造商</h2>
                                  <span>29.9元起</span>
                                        
                          </div>
                          
                      </li>
                      <li>
                          <div class="supplyItem">
                                  <h2>新秀丽制造商</h2>
                                  <span>159元起</span>
                                        
                          </div>
                          
                      </li>
                      <li>
                          <div class="supplyItem">
                                  <h2>Armani制造商</h2>
                                  <span>199元起</span>
                                    
                          </div>
                          
                      </li>
                      
                  </ul>
              </div>
          </div>
          <!-- 类目热销榜 -->
          <div class="hot-shop">
                  <div class="hot-title">
                      <h1>类目热销榜</h1>
                  </div>
                  <ul clsaa="shopList">
                      <li>
                          <div class="shopItem">
                                  <h2>海外制造商</h2>
                                  <div class="line"></div>  
                                  <img src="images/hot/01.png" alt="">     
                          </div>
                          
                          
                      </li>
                      <li>
                          <div class="shopItem">
                                  <h2>CK制造商</h2>   
                                  <img src="images/hot/02.png" alt="">      
                          </div>
                        
                      </li>
                      
                      
                  </ul>
              </div>
      </div>
      </div>
  </div>
  </section>
</template>

<script type="text/ecmascript-6">
import HomeHeader from '../../compoments/HomeHeader/HomeHeader.vue';
import BScroll from 'better-scroll';
import Swiper from 'swiper'
import {mapState  } from 'vuex'
  export default {
    
    computed:{
      ...mapState({
       homeData:state=>state.home.homeData
       
      })
    },
    components:{
      HomeHeader
    },
    mounted() {
      
      //分配获取home数据
      this.$store.dispatch("getHomeData")
      
      setTimeout(() => {
        /* 
        创建swiper对象的时机?   必须在列表页面显示之后
        */
        new Swiper('.swiper-container', {
          autoplay: true,//自动播放
          loop: true, // 循环模式
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }, 1000);
      //滑动scroll
      const scroll = new BScroll('.gun',{
            scrollY: true
      })
      const scroll2 = new BScroll('.search-nav',{
            click:true,
            scrollX: true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import '../../common/stylus/mixin.styl' 
  px2rem(designpx )
    $rem =75px;
    return (designpx / $rem )rem
  #home
    .container
      width 100%
      height 100%
      background-color #f2f2f2
      padding-top px2rem(148px)
      padding-bottom px2rem(98px)
      .gun
        width 100%
        height px2rem(1088px)
        .home-box
        .home-banner
          .swiper-container
            .swiper-wrapper
              .swiper-slide
                width 375px
                height 185px
                img 
                  width 100%
                  height 100%
            .swiper-pagination-bullet 
              width 20px
              height 2px
              border-radius 0
              background: #fff;
              opacity: 0.2
            .swiper-pagination-bullet-active
              opacity: 1
              background: #fff
        .home-service-procity
          padding 0 10px
          background-color #fff
          .service
            display flex
            justify-content space-around
            align-items center
            line-height 36px
            li
              font-size 12px
              color #333
              .iconfont
                color #b4282d
          .procity
            display flex
            flex-wrap wrap
            justify-content center
            li
              display flex
              flex-direction column
              font-size 12px
              margin 8px
            img
              width 55px
              height 55px
              margin-bottom 10px
        .freshmanModule
          display flex
          box-sizing border-box
          flex-direction column
          width 100%
          margin-top 10px
          background-color #fff
          padding px2rem(24px)
          .freshman
            font-size 16px
            margin 0 auto
            margin-bottom 14px
          .man
            display flex
            justify-content center
            .left
              font-size 16px
              width px2rem(343px)
              height px2rem(434px)
              background-color #f9e9cf
              .name
                padding 20px
              .imgWrap
                img 
                  display block
                  width 130px
                  height 130px
                  margin 0 auto
            .right
              margin-left 2px
              .right-top
                position relative
                display flex
                width px2rem(343px)
                height px2rem(215px)
                background-color #FBE2D3
                font-size px2rem(24px)
                .shoes
                  padding 20px
                  position absolute
                  h1
                    font-size px2rem(32px)
                    margin-bottom 6px
                  h2
                    color #7f7f7f
                .imgWrap
                  img 
                    width px2rem(200px)
                    height px2rem(200px)
                    margin-left px2rem(140px)
                .scroil
                  position absolute
                  top 20px
                  right 15px
                  display flex
                  flex-direction column
                  align-items center
                  justify-content center
                  width px2rem(80px)
                  height px2rem(80px)
                  border-radius 100%
                  background-color #F59524
                  color #fff
                  b
                    font-size px2rem(20px)
              .right-bottom
                position relative
                display flex
                margin-top 2px
                width px2rem(343px)
                height px2rem(215px)
                background-color #FFECC2
                font-size px2rem(24px)
                .one-shoes
                  padding 20px
                  position absolute
                  h1
                    font-size px2rem(32px)
                    margin-bottom 6px
                  h2
                    color #7f7f7f
                .imgWrap
                  img 
                    width px2rem(200px)
                    height px2rem(200px)
                    margin-left px2rem(140px)
                
                .scroil
                  position absolute
                  top 20px
                  right 15px
                  display flex
                  flex-direction column
                  align-items center
                  justify-content center
                  width px2rem(80px)
                  height px2rem(80px)
                  border-radius 100%
                  background-color #F59524
                  color #fff
                  b
                    font-size px2rem(20px)
        .manu-facturers-supplying
          padding 0 px2rem(26px) px2rem(30px) px2rem(26px)
          margin-top 10px
          background-color #fff
          .manu-title
            width 100%
            height px2rem(100px)
            background-color #fff
            line-height px2rem(100px)
            font-size px2rem(32px)
            display flex
            justify-content space-between
            .title-icon
              display flex
          .manu-supplying
            display flex
            justify-content center
            ul
              display flex
              flex-wrap wrap
              justify-content center
              
              li
                width px2rem(343px)
                height px2rem(260px)
                margin-right 2px
                margin-bottom 2px
                &:nth-child(2) div
                  background-image url('./images/liwu/03.png')
                &:nth-child(3) div
                  background-image url('./images/liwu/04.png')
                &:nth-child(4) div
                  background-image url('./images/liwu/05.png')
                .supplyItem
                  box-sizing border-box
                  width px2rem(343px)
                  height px2rem(260px)
                  background-image url('./images/liwu/02.png')
                  background-size 100% 100%
                  font-size px2rem(28px)
                  line-height 20px
                  text-align center
                  padding-top 16px
                  
                  span
                    font-size px2rem(24spx)
                    color #7f7f7f
                  .up
                    background-color #CBB693
        .hot-shop  
          display flex
          flex-direction column
          justify-content center
          padding 0 px2rem(26px) px2rem(30px) px2rem(26px)
          margin-top 10px
          background-color #fff
          .hot-title
            width 100%
            height px2rem(100px)
            background-color #fff
            line-height px2rem(100px)
            font-size px2rem(32px)
          ul
            display flex
            flex-wrap wrap
            justify-content center
            
            li
              width px2rem(340px)
              height px2rem(200px)
              margin-right 4px
              margin-bottom 4px
              &:nth-child(2) div
                background-color #EBEFF6
              .shopItem
                box-sizing border-box
                width px2rem(340px)
                height px2rem(200px)
                background-color #F9F3E4
                background-size 100% 100%
                font-size px2rem(28px)
                display flex
                justify-content center
                align-items center
                img 
                  width px2rem(200px)
                  height px2rem(200px)
                span
                  font-size px2rem(24spx)
                  color #7f7f7f           

    
  

     </style>
