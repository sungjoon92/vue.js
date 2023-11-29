<template>
  <div>
    <!-- DataBindingInputView.vue -->
    <h1>input 바인딩 - 양방형</h1>
    <select name="" id="">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">제주</option>
      <option value="064">부산</option>
    </select>
    <input id="id" type="text" v-model="userid">
    <button @click="myfunction">클릭</button>
    <button @click="changeData">변경</button>
    <p>클릭결과 : {{ userid }}</p>

    <h3>숫자 바인딩</h3>
    <input type="number" v-model="num1">
    +
    <input type="number" v-model="num2">
    결과 :
    <span>{{ num1+num2 }}</span>
    <hr>
    <input type="text" v-model.number="num3">
    +
    <input type="text" v-model.number="num4">
    결과 :
    <span>{{ num3+num4 }}</span>
  </div>

</template>

<script>
export default {
  // function data() {}
  data () {
    return {
      // 본문과 바인딩에 필요한 변수를 선언
      userid: 'sungjoon',
      input: '성준 홈페이지',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    myfunction () { // function 생략
      alert(this.userid)
    },
    changeData () {
      this.userid = 'korea'
    }
  }
}
</script>
