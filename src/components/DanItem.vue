<template>
    <div>
        <div class="showfild">
            <h4 v-if="!editing">
                {{ dan.title }}단<br />
                <for v-for="index in 9" :key="index">
                    {{dan.title}} * {{index}} = {{ dan.title * index }}<br/>
                </for>
            </h4>
            <input
                v-bind:value="danText" 
                @input="bindDanText"
                @change="danTextChange"
                v-else type="number" 
                class="form-control" 
             />
        
             <div class="button">
                <div>
                <button @click="updateDanI(dan)">{{editing?'Update' :'Edit'}}</button>
                <button @click="deleteDan(dan.id)">Delete</button>
            </div>
             </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        dan: {}
    },
    data() {
        return{
            danText:"1",
            editing: false
        };
    },
    methods : {
        ...mapActions(["deleteDan","updateDan"]),
        danTextChange(e){
            this.danText = e.target.value;
        },
        updateDanI(dan){
            this.editing = this.editing == true ? false : true;
            if(this.editing){
                this.updateDan({
                    id: this.danText,
                    title: this.danText
                });
            }else{
                dan.title = this.danText;
            }
        }
  }
}
</script>

<style scoped>
.showfild{
    display: flex;
    min-height: 30px;
    height: 350px;
    line-height: 30px;
    width: 28%;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: lightgray;
    border-radius: 20px;
    margin: 20px;
    float: left;

}
</style>