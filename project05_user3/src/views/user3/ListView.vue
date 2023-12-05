<template>
  <div>
    <h1>사용자 목록 (ListView)</h1>
    <p>
      <button class="btn btn-danger" @click="getData">AXIOS모듈 테스트</button>
      <router-link to="/user3/create" class="btn btn-success">사용자 추가</router-link>
    </p>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr class="info">
            <th>이름</th>
            <th>이메일</th>
            <th>가입날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in result" v-bind:key="row.no" v-on:click="$event => href(row)">
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.regdate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import store from '@/store'
export default {
  name: 'ListView',
  data () {
    return {
      result: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios
        .post('http://localhost:9095/user3/list')
        .then((response) => {
          this.result = response.data.result
        })
        .catch((error) => {
          console.log(error)
        })
    },
    href (row) {
      // console.log(row)
      // query -> http://localhost:8080/user/findById?name=아이티윌&pwd=1234
      // this.$router.push({ name: 'SelectView', query: row })
      // params -> http://localhost:8080/user/findById/아이티윌/1234
      // index.js 파일에서 path: '/user/findById/:name/:pwd' 정의해야 함
      // this.$router.push({ name: 'SelectView', params: row })

      // store기능를 사용하기 위해 vuex설치해야 함. package.json에서 vuex모듈 설치되었는지 확인
      // >npm install vuex
      store.commit('setUser', row)
      this.$router.push({ name: 'SelectView' })
    }
  }
}
</script>
<style>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
</style>
