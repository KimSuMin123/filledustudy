<template>
    <div>
        <div>
            <input 
                @change="danTextChange" 
                @input="bindDanText"
                v-bind:value="danText" 
                class="form-control"  
                type="number" 
                placeholder="정수를 입력하세요!!"
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
}

</script>

<style scoped>

</style>