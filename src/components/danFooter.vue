<template>
    <div class="clearAllContainer">
        <span class="clearBtn" @click="cleardan">Clear All</span>
    </div>
  </template>
  
  <script>
  export default {
      methods: {
          cleardan(){
              this.$emit('removeAll');
          }
      }
  }
  </script>
  
  <style>
      .clearAllContainer {
          width: 8rem;
          height: 50px;
          line-height: 50px;
          border-radius: 5px;
          margin: 0 auto;
      }
      .clearBtn {
          color: #e20303;
          display: black;
      }
  </style>