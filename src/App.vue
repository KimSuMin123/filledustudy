<template>
  <div id="app">
     <DanInput />
     <DanList />
   </div>
 </template>
 
 <script>
 import DanInput from '@/components/DanInput';
 import DanList from '@/components/DanList';
 
 export default {
   name: 'App',
   components: {
     DanInput,
     DanList
   }
 }
 </script>
 
 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }
 </style>