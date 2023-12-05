<template>
  <div>
    <h1>사용자 추가 (CreateView)</h1>
    <p>
      <router-link to="/user3/list" class="btn btn-primary">사용자 목록</router-link>
    </p>
    <div class="container">
      <form>
        <table class="table table-condensed">
          <tr>
            <th>
              <label for="name">이름:</label>
            </th>
            <td>
              <input type="text" id="name" name="name" placeholder="이름 입력하세요" class="form-control" autocomplete="off"
                v-model="result.name" :class="{ active: active.name }">
            </td>
          </tr>
          <tr>
            <th>
              <label for="email">이메일:</label>
            </th>
            <td>
              <input type="email" id="email" name="email" placeholder="이메일 입력하세요" class="form-control" autocomplete="off"
                v-model="result.email" :class="{ active: active.email }">
            </td>
          </tr>
          <tr>
            <th>
              <label for="pwd">비밀번호:</label>
            </th>
            <td>
              <input type="password" id="pwd" name="pwd" placeholder="비밀번호 입력하세요" class="form-control" autocomplete="off"
                v-model="result.pwd" :class="{ active: active.pwd }">
            </td>
          </tr>
          <tr>
            <th>
              성별:
            </th>
            <td>
              <input type="radio" id="radio1" name="gender" value="1" checked v-model="result.gender">
              <label for="radio1">남성</label>
              &nbsp;&nbsp;&nbsp;
              <input type="radio" id="radio2" name="gender" value="0" checked v-model="result.gender">
              <label for="radio2">여성</label>
            </td>
          </tr>
        </table>
      </form>
      <div>
        <button type="button" class="btn btn-warning" @click="save">생성</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import axios from 'axios'
export default {
  name: 'CreateView',
  data () {
    return {
      result: { name: '', email: '', pwd: '', gender: '' },
      active: { name: false, email: false, pwd: false }
    }
  },
  created () {
  },
  methods: {
    save () {
      if (this.result.name === '') {
        alert('이름 입력해 주세요~')
        this.active.name = true
        return
      } else {
        this.active.name = false
      }

      if (this.result.email === '') {
        alert('이메일 입력해 주세요~')
        this.active.email = true
        return
      } else {
        this.active.email = false
      }
      if (this.result.pwd === '') {
        alert('비밀번호 이름 입력해 주세요~')
        this.active.pwd = true
        return
      } else {
        this.active.pwd = false
      }
      console.log(this.result)
      axios
        .put('http://localhost:9095/user3/save', this.result)
        .then((res) => {
          console.log(res)
          alert('사용자가 추가되었습니다')
          this.$router.push({ name: 'ListView' })
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
<style>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
</style>
