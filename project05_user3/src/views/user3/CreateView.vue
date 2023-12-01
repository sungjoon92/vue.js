<template>
  <div>
    <!-- ListView.vue -->
    <h1>사용자 추가 (CreateView)</h1>
    <p>
      <router-link to="/user3/list" class="btn btn-primary">사용자 목록</router-link>
    </p>
    <div class="container">
        <form action="">
            <table class="table table-condensed">
              <tr>
                  <th>
                      <label for="name">이름:</label>
                  </th>
                  <td>
                      <input type="text" id="name" name="name" placeholder="이름 입력하세요" class="form-control" autocomplete="off">
                  </td>
              </tr>
                <tr>
                  <th>
                      <label for="email">이메일:</label>
                  </th>
                  <td>
                      <input type="email" id="email" name="email" placeholder="이메일 입력하세요" class="form-control" autocomplete="off">
                  </td>
              </tr>
              <tr>
                  <th>
                      <label for="pwd">비밀번호:</label>
                  </th>
                  <td>
                      <input type="password" id="pwd" name="pwd" placeholder="비밀번호 입력하세요" class="form-control" autocomplete="off">
                  </td>
              </tr>
              <tr>
                  <th>
                      성별:
                  </th>
                  <td>
                      <input type="radio" id="radio1" name="gender" value="1" checked>
                      <label for="radio1">남성</label>
                      &nbsp;&nbsp;&nbsp;
                      <input type="radio" id="radio2" name="gender" value="0" checked>
                      <label for="radio2">여성</label>
                  </td>
              </tr>
            </table>
        </form>
      </div>
    <div>
        <button class="btn btn-warning">생성</button>
    </div>
  </div>
</template>

<script>
// 주의사항 AXIOS모듈 임포트후 사용하지 않으면 에러발생
// import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
 @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
</style>
