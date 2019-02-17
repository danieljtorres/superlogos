<template>
    
</template>

<style>

</style>


<script>
export default {
  created () {
    let portfolios = this.props.portfolios

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

    console.log(this.orderedPortfolios)
  },
  props: ['portfolios'],
  data () {
    return {
      orderedPortfolios: []
    }
  }
}
</script>
