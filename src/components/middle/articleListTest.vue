<template>
  <div class="article_test">
    <div class="article-box" v-for="(n,i) in article" :key="n.title">
      <div class="article-img-con">
        <img :src="n.img_url" class="article-img"/>
      </div>
      <div class="article-left">
        <div class="article-title">
          <router-link class="article-link" :to="`/articletest/${i}`">{{n.title}}</router-link>
        </div>
        <div class="article-content">{{n.describes}}</div>
        <div class="article-info">
          <span @click="to(`/articletest/${i}`)">发布于 {{counter(n.date)}}</span>
          <span @click="to(`/articletest/${i}`)">阅读 {{n.pv}}</span>
          <span @click="to(`/articletest/${i}`)">回复 {{n.comment}}</span>
        </div>
      </div>
    </div>
    <div v-if="article.length===0" class="no-more">没有文章</div>
  </div>
</template>

<script>
  import {timeFormat} from '@/utils/filter' // todo 废弃

  export default {
    name: 'article-list-test',
    // created () {
    //  this.$store.dispatch('getArticleTest')
    // },
    computed: {
      article () {
        return this.$store.state.articleTest
      }
    },
    filters: {
      timeFormat
    },
    methods: {
      to (route) {
        this.$router.push(route)
      },
      counter (time) {
        return this.$datecounter(time)
      }
    }
  }
</script>

<style scoped>
  .article_test {
    width: 640px;
    /*background-color: rgba(255, 255, 255, 0.8);*/
  }

  .article-box {
    border-radius: 3px;
    margin: 0 0 5px 0;
    /*padding: 5px;*/
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    transition-property: background-color, box-shadow;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    -webkit-transition-property: background-color, box-shadow;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .article-box:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);
  }

  .article-img-con {
    width: 100px;
    height: 100px;
    border-radius: 3px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .article-img {
    height: 100%;
    width: auto;
  }

  .article-left {
    width: 518px;
    padding: 0 10px;
  }

  .article-title {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
  }

  .article-link:hover {
    text-decoration: underline;
  }

  .article-content {
    height: 50px;
    font-size: 13px;
  }

  .article-info {
    color: #767676;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
  }

  .article-info span {
    display: inline-block;
    width: auto;
    margin: 0 0 0 15px;
    font-size: 12px;
    line-height: 12px;
  }

  .article-info span:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .no-more {
    width: 640px;
    border-radius: 3px;
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    text-align: center;
    line-height: 45px;
  }
</style>
