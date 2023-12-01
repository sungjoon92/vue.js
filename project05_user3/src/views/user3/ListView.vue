<template>
  <div>
    <!-- ListView.vue -->
    <h1>사용자 목록 (ListView)</h1>
    <p>
      <button class="btn btn-danger" @click="getData">AXIOS모듈 테스트</button>
      <router-link to="/user3/create" class="btn btn-primary">사용자 추가</router-link>
    </p>
  </div>
</template>

<script>
// 주의사항 AXIOS모듈 임포트후 사용하지 않으면 에러발생
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
    getData () {
      axios
        .get('http://localhost:9095/test')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
 @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
</style>
