<template>
    <section>
        <!-- 
            transition-group: 애니메이션 추가를 위한 태그
            tag: 애니메이션이 들어갈 html tag
            :key = 애니메이션 대상 태그
          -->
        <transition-group name="list" tag="ul">
          <li v-for="(danItem, idx) in propsdata" :key="danItem" class="shadow">
             
             <span class="checkField" @click="checkedItem(idx)">
                 <i class="checkBtn fas fa-check" 
                 aria-hidden="true"></i>
             </span>
             <div class="textField"
             v-show="!toFix || checked !== idx">
             {{ danItem }}단 <br/>
             <for v-for="index in 9" :key="index">
                {{danItem}} * {{index}} = {{ danItem * index }}<br/>
            </for>
             </div>
             <input type="text"
             ref="fixField"
             v-model="newdanItem"
             @keyup.enter="changeItem"
             v-show="toFix && checked === idx && showCheck" placeholder="정수를 입력해 주세요">
              
              <div class="btnGroup">
                  <!-- 수정버튼 -->
                  <span class="fixBtn" type="button" >
                      <i class="fas fa-pencil-alt"
                      v-show="showCheck && checked === idx"
                      @click="changeItem"
                      aria-hidden="true"></i>
                  </span>
                  <!-- 삭제버튼 -->
                  <span class="removeBtn" type="button" @click="removedan(danItem, idx)">
                      <i class="far fa-trash-alt" aria-hidden="true"></i>
                  </span>
              </div>
          </li>
        </transition-group>
    </section>
  </template>
  
  <script>
  export default {
      props: {
          //['propsdata','showCheck']
          propsdata: Object,
          showCheck: Boolean,
          checked: Number,
          toFix: Boolean,
      },
      data() {
          return {
              chkIdx: 0,
              newdanItem: '',
          }
      },
      methods : {
          removedan(danItem, index) {
              this.$emit('removedan', danItem, index);
          },
          checkedItem(index) {
              this.$emit('changeCheck', index);
          },
          changeItem(){
              
              this.$nextTick(function() {
                  this.$refs.fixField.focus();
              });
            
              //수정사항이 있을 경우
              if(this.newdanItem !== ""&& (isNaN(this.newdanItem )!== true)){
                  let value = this.newdanItem && this.newdanItem.trim();
                  this.$emit('fixContent', value);
                  this.newdanItem = '';
              }
              this.$emit('toFixItem');
          }, 
      },
  }
  </script>
  
  <style scoped>
      input:focus {
          outline: none;
      }
      input {
          border-style: none;
          font-size: 0.9rem;
      }
      .checkField {
          width:20px;
      }
      .textField {
          margin-left: 5px;
      }
      
      .list-enter-active, .list-leave-active {
          transition: all 1s;
      }
      .list-enter, .list-leave-to {
          opacity: 0;
          /*transform: translateY(30px);*/
      }
      
      ul {
          list-style-type: none;
          padding-left: 0px;
          margin-top: 0;
          text-align: left;
      }
      li {
          display: flex;
          min-height: 30px;
          height: 300px;
          line-height: 30px;
          width: 28%;
          margin: 0.5rem 0;
          padding: 0 0.9rem;
          background: white;
          border-radius: 20px;
          margin: 20px;
          float: left;
      }
      .checkBtn {
          line-height: 45px;
          color: #62acde;
          margin-right: 5px;
      }
      .btnGroup {
          margin-left: auto;
      }
      .fixBtn {
          color: #3ee972;
          margin-right: 20px;
      }
      .removeBtn {
          color: #de4343;
      }
  </style>