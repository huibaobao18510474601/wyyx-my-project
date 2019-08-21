<template>
  <div class="searchContainer">
    <div class="hearderContainer">
      <div class="searchWraper">
        <div class="search">
          <div class="searchInput">
            <i class="iconfont icon-search"></i>
            <input type="text" placeholder="22ss2"/>
          </div>
        <div class="cancle" @click="$router.back()">取消</div>
      </div>
    </div>
     
    </div>
    <div class="hotkeywordsContainer" style="display: block">
      <div class="searchHistories on" >
          <div class="historyDesc">
            <span>历史记录</span>
            <i class="iconfont icon-delete"></i>
          </div>
          <div class="historyList">
            <a class="historyItem">爆款推荐</a>
          </div>
      </div>
      <div class="hotSearch">
        <div class="title">热门搜索</div>
        <div class="navList">
          <a class="navItem" href="javascript:;">爆款 行李箱</a>
          <a class="navItem" href="javascript:;">爆款 </a>
          <a class="navItem hot-color" href="javascript:;">爆款 行李箱</a>
          <a class="navItem" href="javascript:;">爆款 </a>
          <a class="navItem" href="javascript:;">爆款 行李箱</a>
          <a class="navItem" href="javascript:;">爆款 行李箱</a>
          <a class="navItem" href="javascript:;">爆款 </a>
          <a class="navItem" href="javascript:;">爆款 行李箱</a>
        </div>
      </div>
    </div>
   <!-- 搜索结果内容区 -->
   <SearchContent/>
  </div>
</template> 

<script type="text/ecmascript-6">
  //import SearchContent from '../../components/SearchContent/SearchContent'
  export default {
    name: 'Search',
    // components: {
    //   SearchContent
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  *
    box-sizing border-box
  px2rem(designpx )
    $rem = 75px
    return (designpx / $rem )rem
  body 
    background #eeeeee
    .searchContainer
      padding-top px2rem(88px)
      width 100%
      height 100%
      overflow hidden
      .hearderContainer
        position fixed
        left 0
        top 0
      
        .searchWraper
          width 100%
          height px2rem(88px)
          padding 0 px2rem(30px)
          font-size 0
          .search
            display flex
            align-items center
            justify-content space-between
            height 100%
            .searchInput
              display flex
              align-items center
              width px2rem(604px)
              height px2rem(56px)
              padding 0 px2rem(20px)
              background-color #eeeeee
              .iconfont
                width px2rem(28px)
                height px2rem(28px)
                margin-right px2rem(16px)
              input 
                width px2rem(520px)
                height px2rem(39px)
                border none 
                background-color transparent
            .cancle
              width px2rem(56px)
              height px2rem(30px)
              margin-left px2rem(30px)
              font-size px2rem(28px)
              vertical-align middle
      .hotkeywordsContainer
        background-color #ffffff
        width 100%
        margin 0 0 px2rem(20px)
        font-size px2rem(24px)
        .searchHistories
          position relative
          width 100%
          padding 0 px2rem(30px)
          font-size px2rem(24px)
         
          .historyDesc
            display flex
            width px2rem(690px)
            height px2rem(90px)
            justify-content space-between
            align-items center
          .historyList
            .historyItem
              float left
              padding 0 px2rem(15px)
              margin 0 px2rem(32px) px2rem(32px) 0
              border 1px solid #cccccc
              border-radius px2rem(5px)
              height px2rem(47px)
              line-height px2rem(47px)
        .hotSearch
          width 100%
          .title
            display flex
            width 100%
            padding 0 px2rem(30px) px2rem(30px)
            font-size px-rem(28px)
            height px2rem(90px)
            line-height px2rem(90px)
          .navList
            display flex
            flex-wrap wrap
            width px2rem(720px)
            padding-left px2rem(30px)
            .navItem
              display flex
              align-items center
              padding 0 px2rem(15px)
              margin 0 px2rem(32px) px2rem(32px) 0
              border 1px solid #cccccc
              border-radius px2rem(5px)
              height px2rem(47px)
              line-height px2r

</style>