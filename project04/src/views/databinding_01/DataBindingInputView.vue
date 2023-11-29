<template>
  <div> <!-- 최상위 태그가 있어야 함 (필수) -->
    <!-- 문자열 데이터 바인딩 -->
    <h1>Hello{{ userName }}</h1>
    <p>{{ message }}</p>
  </div>

</template>

<script>
export default {
  // function data() {}
  data () {
    return {
      // 본문과 바인딩에 필요한 변수를 선언
      userName: 'joon',
      message: '성준 홈페이지'
    }
  }
}
</script>
