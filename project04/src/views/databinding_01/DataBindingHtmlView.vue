<template>
  <div id="wrap"> <!-- HTML 바인딩 -->
    <p>{{ red }}</p>
    <div>{{ htmlback }}</div>
    <div v-html="blue"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      red: '빨간색 문자',
      blue: '<p style="color:blue">파란색 문자</p>',
      htmlback: '검은색 배경'
    }
  }
}
</script>

<style>
p {
  color: red;
}

#wrap > div:nth-child(2) {
  width: 100%;
  background: #000;
  color: white;
}
</style>
