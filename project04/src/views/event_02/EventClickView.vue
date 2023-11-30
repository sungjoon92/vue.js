<template>
  <div>
    <!-- 1) DataBindingClickView.vue -->
    <h3>click 이벤트</h3>
    <button @click="increaseCounter">좋아효</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter += 1
    }
  }
}
</script>
