<template>
  <div>
    <!-- 1) Backend : SpringBoot기반 (spring10_memo프로젝트 참조) -->
    <!-- 웹 서버와 데이터 통신 -->
    <!-- MemeListView.vue -->
    <h3>방명록</h3>
    <p>
      <button class="bth btn-primary" @click="getList">목록</button>
    </p>
    <ul class="list-group">
      <li v-if="memoList.length == 0" class="list-group-item">게시물이 없습니다</li>
      <li v-for="memo in memoList" class="list-group-item" :key="memo.memono">{{ memo.subject }}<span class="badge">{{ memo.readcnt }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memoList: []
    }
  },
  methods: {
    getList () {
      // alert('getList 함수 호출')
      // fetch() 자바스크립 기반의 서버와 데이터 통신
      fetch('http://localhost:9095/memolist').then((Response) => {
        if (Response.ok) {
          return Response.json()
        }// if end
      }).then((json) => {
        this.memoList = json
      })
    }
  }
}

</script>

<style>

  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
</style>
