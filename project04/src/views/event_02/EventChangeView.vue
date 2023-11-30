<template>
  <div>
    <!-- 1) DataBindingChangeView.vue -->
    <h3>Change 이벤트</h3>
    <!-- 이벤트 v-on:change==""의 축약형 @change -->
    <!-- 서울을 클릭하면 selectdCity변수에 02값 지정 -->
    <select name="" id="" v-model="selectedCity" @change="changeCity">
      <option value="">도시선택</option>
      <option v-for="city in cityList" :key="city.cityCode" :value="city.cityCode">{{ city.title }}</option>
    </select>
    <!-- 예) dongList변수에서 필터한 값을 저장하고 있는 selectedDongList값 출력 서울1~서울4 -->
    <select name="" id="">
      <option v-for="dong in selectedDongList" :key="dong.dongCode" :value="dong.dongCode">{{ dong.dongTitle }}</option>
    </select>
    <hr>
    <!-- 양방향이기 때문에 change이벤트를 사용하지 않고도 구현가능 (단, 가독성이 떨어지므로 비추천) -->
    <select name="" id="" v-model="selectedCity">
      <option value="">도시선택</option>
      <option v-for="city in cityList" :key="city.cityCode" :value="city.cityCode">{{ city.title }}</option>
    </select>
    <select name="" id="">
      <option v-for="dong in dongList.filter(dong => dong.cityCode === selectedCity)" :key="dong.dongCode" :value="dong.dongCode">{{ dong.dongTitle }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCity: '', // 02|051|064 저장
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' }
      ],
      selectedDongList: [] // 해당하는 동만 걸러서 저장 예) 서울1~서울4
    }
  },
  methods: {
    changeCity () {
      // alert(this.selectedCity)

      // 선택한 selectedCity가 02이면 dongList에서 02만 걸러내서 selectedDongList에 저장
      // var sum = function(a,b) {
      //     return a+b;
      // },

      // var sum = (a, b) => {
      //     return a+b
      // }
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
      console.log(this.selectedDongList)
    }
  }
}
</script>
