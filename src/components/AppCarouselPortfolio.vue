<template>
  <div style="width:80%; margin:auto">
    <div class="portfolio-carousel">
      <div  :style="'left:' + (index * 100) + '%; transform: translateX('+currentTranslate +'%)'  " class="portfolio-carousel-slide" v-for="(orderedPortfolio, index) in orderedPortfolios" :key="index">
        <div v-for="(singlePortfolio, SubIndex) in orderedPortfolio" :key="SubIndex" class="portfolio-carousel-item">
        <svg viewBox="0 0 100 100" :style="'background-image: url(http://198.136.62.171:8080/v1/images/slug/' + singlePortfolio.images[0].slug + ')'"></svg>
        </div>  
      </div>
    </div>
    <div style="text-align: center;">
      <button :class="'button-carousel ' + (currentIndex === index ? 'current' :  '')" v-for="(orderedPortfolio, index) in orderedPortfolios" :key="index" @click="changeIndex(index)"></button>
    </div>
  </div>
</template>

<style>

  .portfolio-carousel {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .portfolio-carousel-slide{
    width:100%;
    position: absolute;
    top: 0%;
    transition: all 0.5s ease;
  }
  .portfolio-carousel-slide:first-child{
    position: relative;
  }
  
  .portfolio-carousel-item {
    width: 25%;
    display: inline-block;
  }

  .button-carousel {
    background-color: gray;
    color: transparent;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    outline: none;
    transition: all 0.3s ease;
    margin: 5px;
  }

  .button-carousel.current {
    background-color: black;
  }
</style>


<script>
export default {
  created () {

  },
  props: ['portfolios'],
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeIndex (newIndex) {
      this.currentIndex = newIndex
    }
  },
  computed: {
    currentTranslate () {
      let currentTranslate = this.currentIndex * 100

      return currentTranslate ? currentTranslate * -1 : 0
    },
    orderedPortfolios () {
      let portfolios = this.portfolios
      if (!portfolios) {
        return
      }

      let orderedPortfolios = []

      portfolios = portfolios.filter((portfolio) => portfolio.images[0])

      for (let portfolio of portfolios) {
        let portfoliosLength = orderedPortfolios.length ? orderedPortfolios.length - 1 : 0

        if (orderedPortfolios[portfoliosLength] === undefined) {
          orderedPortfolios[portfoliosLength] = [portfolio]
          continue
        }

        if (orderedPortfolios[portfoliosLength].length === 8) {
          orderedPortfolios[portfoliosLength + 1] = [portfolio]
          continue
        }

        orderedPortfolios[portfoliosLength].push(portfolio)
      }

      return orderedPortfolios
    }
  }
}
</script>
