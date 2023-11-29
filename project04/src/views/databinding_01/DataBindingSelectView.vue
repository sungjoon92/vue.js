<template>
  <div>
    <!-- select 바인딩 -->
    <h3>select 바인딩</h3>
    <select name="" id="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">제주</option>
      <option value="064">부산</option>
    </select>

    <h3>checkbox 바인딩</h3>
    <div>
      <input type="checkbox" id="html" value="HTML" v-model="favoritelang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="CSS" v-model="favoritelang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="JS" v-model="favoritelang">
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 과목 : {{ favoritelang }}</div>

      <h3>radio 바인딩</h3>
    <div>
      <input type="radio" id="food1" value="food1" v-model="favoriteFood">
      <label for="food1">짜장면</label>
    </div>
    <div>
      <input type="radio" id="food2" value="food2" v-model="favoriteFood">
      <label for="food2">짬뽕</label>
    </div>
    <div>
      <input type="radio" id="food3" value="food3" v-model="favoriteFood">
      <label for="food3">탕수육</label>
    </div>
    <div>좋아하은 음식 {{ favoriteFood }}</div>
  </div>
</template>

<script>
export default {
  // function data() {}
  data () {
    return {
    // 본문과 바인딩에 필요한 변수를 선언
      selectedCity: '02', // 02 | 051 | 064
      // favoritelang: [] // 여러개 선택이 가능한 값은 반드시 배열로 선언한다.
      favoritelang: ['js'],
      favoriteFood: '' // radio 속성은 하나만 선택되기 때문에 문자열로 선언한다
    }
  },
  methods: {

  }
}
</script>
