<template>
   <div class="header-box">
        <div class="search-header">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
            <div class="search-box" @click="$router.push('/search')">
                <i class="iconfont icon-sousuo"></i>
                <div >搜索商品，共21726件好物</div>
            </div>
            <span class="login-box">登录</span>
        </div>
        <div class="search-nav">
            <ul class="nav-box">
                <li :class="{active:curIndex}" @click="addClass($event)">
                    <a href="#">推荐</a>
                </li>
                <li>
                    <a href="#">居家生活</a>
                </li>
                <li>
                    <a href="#">服饰鞋包</a>
                </li>
                <li>
                    <a href="#">美食酒水</a>
                    </li>
                    <li>
                    <a href="#">个人用品</a>
                    </li>
            </ul> 
            <div class="down" :class="{active:isShow}" @click="changeShow">
                <i class="iconfont icon-xiajiantou"></i>
            </div>
            <!--所有的导航-->
            <div class="allNav" v-show="isShow">
              <p>全部频道</p>
              <ul class="navList">
                <li>
                  <a href="javascript">推荐</a>
                </li>
                <li>
                  <a href="javascript">居家生活</a>
                </li>
                <li>
                  <a href="javascript">服饰鞋包</a>
                </li>
                <li>
                  <a href="javascript">美食酒水</a>
                </li>
                <li>
                  <a href="javascript">个护清洁</a>
                </li>
                <li>
                  <a href="javascript">母婴亲子</a>
                </li>
                <li>
                  <a href="javascript">运动旅行</a>
                </li>
                <li>
                  <a href="javascript">数码家电</a>
                </li>
                <li>
                  <a href="javascript">全球特色</a>
                </li>
              </ul>
            </div>
        </div>
        
        
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        curIndex:0,
        isShow:true
      }
    },
    methods: {
      addClass(event){
        console.log(event);
      },
      changeShow(){
        console.log(111111);
        this.isShow=!this.isShow
      }
    },
    mounted(){
      this.changeShow()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl' 
  px2rem(designpx )
    $rem =75px;
    return (designpx / $rem )rem
  .header-box
    z-index 99
    position fixed
    top 0
    left 0
    width 100%
    height px2rem(148px)
    background-color #fff
    .search-header
      display flex
      box-sizing border-box
      padding 8px 14px
      justify-content space-around
      align-items center
      img 
        width 66px
        height 20px
      .search-box
        width px2rem(442px)
        height px2rem(56px)
        line-height px2rem(56px)
        background-color #ededed
        color #666666
        font-size 12px
        text-align center
        display flex
        box-sizing border-box
        padding-left 10px
        i 
          line-height 28px
      .login-box
        width 38px
        height 21px
        border 1px solid #b4282d
        border-radius 4px
        font-size 12px
        color #b4282d
        text-align center
        line-height 21px
        background:none
        outline:none  
        border:none
    .search-nav
      position relative
      width 100%
      height px2rem(60px)
      box-sizing border-box
      padding 0 10px
      
      .nav-box
        width 1000px
        height px2rem(60px)
        display flex
        li
          line-height px2rem(60px)
          margin 0 10px
          a
            font-size 14px
            color #333 
            vertical-align middle
            padding 0 6px   
          &.active
            border-bottom 2px solid #b4282d
            a
              color #b4282d
      .down
        width px2rem(100px)
        height px2rem(60px)
        text-align center
        background #fff
        display: flex;
        justify-content: center;
        align-items: center;
        position absolute
        top 0
        right 0
        z-index 2
        transition transform 300ms
        &.active
          transform rotateZ(180deg)
        i 
          font-size 16px
          text-align center
          line-height px2rem(60px)
      .allNav
        position absolute
        top 0
        left 0
        width 100%
        background-color #fff
        p
          height: 60px;
          padding-left: 30px;
          font-size: px2rem(28px);
          display flex
          align-items center
        .navList
          display flex
          flex-wrap wrap
          justify-content flex-start
          li
            width px2rem(150px)
            height px2rem(56px)
            boeder 1px solid #dedede
            background-color #fafafa
            text-align color 
            line-height px2rem(56px)
            margin 0 0 px2rem(40px) px2rem(30px)


    </style>
