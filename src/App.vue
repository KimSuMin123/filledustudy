<template>
  <div id="app">
    <danHeader></danHeader>
    <danInput v-on:adddan="adddan"></danInput>
    <danList 
      @changeCheck = "showCheck = !showCheck; checked = $event;" 
      @removedan="removedan"
      @toFixItem="toFix = !toFix;"
      @fixContent="fixContent($event); showCheck = !showCheck;"
      :propsdata="danItems" :showCheck="showCheck" :checked="checked" :toFix="toFix"></danList>
    <danFooter v-on:removeAll="clearAll"></danFooter>
  </div>
  </template>
  
  <script>
  import danHeader from './components/danHeader.vue';
  import danFooter from './components/danFooter.vue';
  import danInput from './components/danInput.vue';
  import danList from './components/danList.vue';
  export default {
    name: 'App',
    data() {
      return {
        danItems:[],
        showCheck:false,
        checked: 0,
        toFix: false,
      }
    },
    components: {
      'danHeader': danHeader,
      'danFooter': danFooter,
      'danInput': danInput,
      'danList': danList
    },
    created(){
      if(localStorage.length > 0){
          for (let i = 0; i < localStorage.length; i ++){
              let sKey = localStorage.key(i);
              let target = localStorage.getItem(sKey);
              if(target !== "SILENT" && target !== "undefined"){
                this.danItems.push(localStorage.key(i));
              }
          }
      }
    },
    methods: {
      adddan(danItem){
        localStorage.setItem(danItem, danItem); // setItem(key, value)
          this.danItems.push((danItem));

      },
      clearAll() {
        localStorage.clear();
        this.danItems = [];
      },
      removedan(danItem, index){
        localStorage.removeItem(danItem);
        this.danItems.splice(index, 1); // splice(startIdx, count): 배열에서 인덱스 시작지점부터 count만큼 삭제
      },
      fixContent(danItem){
        let lastIdx = this.danItems.length -1;
        
        this.tempArr = this.danItems.splice(this.checked, (this.danItems.length - this.checked), danItem); //수정할 타겟부터 끝까지 잘라내고, danItems의 잘라낸 자리에 새로운 값 넣음 
        //this.danItems.push(danItem); //수정한 데이터 삽입
        if(this.checked !== lastIdx){ //체크한게 배열 마지막 값이 아니면
          let tempArr2 = this.tempArr.splice(1, this.tempArr.length -1); //최초값은 수정할 데이터이므로 제거
          this.tempArr = this.danItems.concat(tempArr2);
          this.danItems = this.tempArr;
        }
        //로컬스토리지 수정
        localStorage.clear();//기존 로컬스토리지 삭제
        for (let i = 0; i < this.danItems.length; i++) { //새 데이터 삽입
          localStorage.setItem(this.danItems[i], this.danItems[i]);
        }
        
      }
    }
  }
  </script>
  
  <style>
  body {
    text-align: center;
    background-color: #f6f6f8
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
  </style>