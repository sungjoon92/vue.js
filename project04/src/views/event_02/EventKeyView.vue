<template>
  <div>
    <!-- 1) EventKeyView.vue -->
    <h3>key 이벤트</h3>
    <input type="search" v-model="searchText" @keyup.enter="doSearch">
    <button @click="doSearch">조회</button>
    <!-- keyup이벤트의 세부 속성들 -->
    <!-- .enter -->
    <!-- .tab -->
    <!-- .delete -->
    <!-- .space -->
    <!-- .ctrl.enter-->
  </div>
  <hr>
  <!-- $event 현재 시점에서 살생한 이벤트값 -->
  <input type="search" v-model="searchText" @keyup="checkEnter($event)">
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    doSearch () {
      alert(this.searchText)
    },
    checkEnter (event) {
      // alert(event)
      if (event.keyCode === 13) { // 엔터키 입력시
        this.doSearch()
      }
    }
  }
}
</script>
