<template>
    <div class="inputBox shadow">
        <!-- 
          v-model이라는 속성을 사용하면 입력 값이 자동으로 뷰 데이터 속성에 연결됩니다.
          v-moel = newdanItem >>
          data > newdanItem: "inputed data"
        -->
        <input type="text" v-model="newdanItem" placeholder="정수를 입력해 주세요" v-on:keyup.enter="adddan">
        <span class="addContainer" v-on:click="adddan">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
  
        <Modal v-if="showModal" @close="showModal = false">
            <template v-slot:header>
                <div>
                    <h3>경고</h3>
                </div>
            </template>
            <template v-slot:body>
                <div>
                    정수를 입력해 주세요!!!
                </div>
            </template>
            <template v-slot:footer>
                <div>
                <i class="closeModalBtn fas fa-times" aria-hidden="true"  @click="showModal = false"></i>    
                </div>
            </template>
        </Modal>
    </div>
  </template>
  
  <script>
  import Modal from './common/Modal.vue';
  export default {
      data() {
          return {
              newdanItem: '',
              showModal: false
          }
      },
      components: {
          Modal : Modal
      },
      methods: {
          adddan() {
              if(this.newdanItem !== ""&& (isNaN(this.newdanItem )!== true)){
                  let value = this.newdanItem && this.newdanItem.trim();
                  this.$emit('adddan', value);
                  this.clearInput();
              }
              else {
                  this.showModal = !this.showModal;
              }
              
          },
          clearInput(){
              this.newdanItem = "";
          }
      }
  }
  </script>
  
  <style scoped>
      input:focus {
          outline: none;
      }
      .inputBox {
          background: white;
          height: 50px;
          line-height: 50px;
          border-radius: 5px;
      }
      .inputBox input {
          border-style: none;
          font-size: 0.9rem;
      }
      .addContainer {
          float: right;
          background: linear-gradient(to right, #6478fb, #8763fb);
          display: block;
          width: 3rem;
          border-radius: 0 5px 5px 0;
      }
      .addBtn {
          color: white;
          vertical-align: middle;
      }
  </style>