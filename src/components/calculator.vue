<template lang="pug">
  .calculator
    .calculator__container
      .display
          input#display.display-numbers2(:value="display" disabled)
      .display
        input#display.display-numbers(:value="dispalyNumber||'0'" disabled)
      .keyboard
        .keyboard-row
          button.keyboard-key.keyboard-key--gray(@click="clearDisplay()") AC
          button.keyboard-key.keyboard-key--gray(@click="changeSign()") #[span +/-]
          button.keyboard-key.keyboard-key--gray(@click="convertPercent()") %
          button.operator.keyboard-key.keyboard-key--orange(@click="handleOperator('÷')") ÷
        .keyboard-row
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('7')") 7
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('8')") 8
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('9')") 9
          button.operator.keyboard-key.keyboard-key--orange(@click="handleOperator('×')") ×
        .keyboard-row
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('4')") 4
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('5')") 5
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('6')") 6
          button.operator.keyboard-key.keyboard-key--orange(@click="handleOperator('-')") −
        .keyboard-row
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('1')") 1
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('2')") 2
          button.number.keyboard-key.keyboard-key--white(@click="appendSymbol('3')") 3
          button.operator.keyboard-key.keyboard-key--orange(@click="handleOperator('+')") +
        .keyboard-row
          button.keyboard-key.keyboard-key--white.keyboard-key--double(@click="appendSymbol('0')") 0
          button.keyboard-key.keyboard-key--white(@click="convertDecimal()") .
          button.keyboard-key.keyboard-key--orange(@click="handleOperator('=')") =

</template>
<script>
export default {
  data () {
    return {
      display: '',
      dispalyNumber: '',

      left: null,
      right: null,
      // oldRight: null,
      // oldOperator: null,
      operator: null,
      current: null,

      // inputReal: 0,
      // inputDecimal: 0,
      // decimalMode: false,
      // realPert: false,
      // current: '',
      // previous: null,
      // clickedOperator: false
    }
  },
  methods: {
    appendSymbol(number) {
      this.dispalyNumber += number 
    },
    // appendSymbol(number) {
    //   this.inputReal = parseFloat(this.inputReal)*10 + parseFloat(number)
    // },
    clearDisplay() {
      this.dispalyNumber = ''
      this.display = ''
    },
    convertDecimal () {
      if (this.dispalyNumber == '') {
        this.dispalyNumber = "0."
      }else{
        if (this.dispalyNumber.indexOf('.') === -1) {
          this.dispalyNumber += "."
        }
      }
    },
    changeSign() {
      this.dispalyNumber = parseFloat(this.dispalyNumber)*-1
    },
    convertPercent() {
      this.dispalyNumber = parseFloat(this.dispalyNumber)/100
    },
    handleOperator (newOperator) {
      if (this.dispalyNumber != ''){
              if (this.operator === null) {
        this.operator = newOperator
        this.left = parseFloat(this.dispalyNumber)
        this.display = this.left+this.operator
        this.dispalyNumber = ''
      }else{
        this.right = parseFloat(this.dispalyNumber)
        if (newOperator == '=') {
            this.display += this.right+'='
            this.current = this.calculate()
            this.dispalyNumber = this.current
            this.left = this.current
            this.right = null
            this.operator = null
          }
        if (newOperator != '='){
          this.left = this.calculate()
          this.display = this.left+newOperator
          this.dispalyNumber = ''
          this.right = null
          this.operator = newOperator
        }
      }
      }
    },
    calculate() {
      if (this.operator === "+") {
        return this.left + this.right
      }
      if (this.operator === "-") {
        return this.left - this.right
      }
      if (this.operator === "÷") {
        return this.left / this.right
      }
      if (this.operator === "×") {
        return this.left * this.right
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/sass/app.scss";
  .calculator{
    margin: 2rem 0;
    &__container{
      width: 100%;
      padding: 1rem;
      border-radius: 36px;
      background: var(--background-calculator);
      @include screen(mobile-big){
        width: 375px;
        display: block;
        margin: 0 auto;
      }
      .display{
        padding: 2rem 1rem;
        display: flex;
        justify-content: flex-end;
        &-numbers{
          font-size: 4rem;
          color: var(--key);
          text-align: right;
          width: 100%;
        }
        &-numbers2{
          font-size: 2rem;
          color: var(--key);
          text-align: right;
          width: 100%;
        }
      }
      .keyboard{
        &-row{
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: space-around;
        }
        &-key{
          display: flex;
          justify-content: center;
          align-items: center;
          appearance: none;
          margin: .5rem .5rem;
          width: 65.9px;
          min-width: 65.9px;
          padding: 1.24rem 0.91rem ;
          border-radius: 2rem;
          @extend .box-shadow;
          background-color: var(--background-calculator);
          font-size: 2rem;
          &:hover {
            cursor: pointer;
          }
          &:active{
            @extend .pressed;
          }
          span{
            font-size: 1.7rem;
          }
          &--double{
            width: 150px;
          }
          &--gray{
            color: var(--key-gray);
          }
          &--orange{
            color: var(--key-orange);
          }
          &--white{
            color: var(--key);
          }
          @include down-screen(mobile-small){
            width: 50px;
            min-width: 50px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
</style>