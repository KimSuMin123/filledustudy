<template>
    <div>
        <div>
            <input 
                @change="danTextChange" 
                @input="bindDanText"
                v-bind:value="danText" 
                class="form-control"  
                type="text" 
            />
            <button @click="addDanI" v-bind:disabled="danText == ''" >Add</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data(){
        return{
            danText : ""
        };
    },
    methods : {
        ...mapActions(["addDan"]),
        danTextChange(e) {
            this.danText = e.target.value;
        },
        addDanI() {
            this.addDan({
                id: this.danText,
                title: this.danText
            });
            this.danText = "";
        }
    },  
    watch: {
        danText(val){
        const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if(reg.exec(val)!==null) this.danText = val.replace(/[^0-9]/g,'');
        if(isNaN(parseFloat(val))) this.danText = '';
        
        }
  }
}

</script>

<style scoped>

</style>
