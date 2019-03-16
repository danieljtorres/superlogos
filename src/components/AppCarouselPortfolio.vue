<template>
  <carousel>
    <slide v-for="(orderedPortfolio, index) in orderedPortfolios" :key="index">
      <div v-for="(singlePortfolio, SubIndex) in orderedPortfolio" :key="SubIndex">
       <svg viewBox="0 0 100 100" :style="'background-image: url(http://198.136.62.171:8080/v1/images/slug/' + singlePortfolio.images[0].slug + ')'"></svg>
      </div>  
    </slide>  
  </carousel>
</template>

<style>

</style>


<script>
export default {
  created () {
    let portfolios = this.portfolios

    if (!portfolios) {
      return
    }

    for (let portfolio of portfolios) {
      let portfoliosLength = this.orderedPortfolios.length ? this.orderedPortfolios.length - 1 : 0
      console.log(this.orderedPortfolios)

      if (this.orderedPortfolios[portfoliosLength] === undefined) {
        this.orderedPortfolios[portfoliosLength] = [portfolio]
        continue
      }

      if (this.orderedPortfolios[portfoliosLength].length === 8) {
        this.orderedPortfolios[portfoliosLength + 1] = [portfolio]
        continue
      }

      this.orderedPortfolios[portfoliosLength].push(portfolio)
    }
  },
  props: ['portfolios'],
  data () {
    return {
      orderedPortfolios: []
    }
  }
}
</script>
