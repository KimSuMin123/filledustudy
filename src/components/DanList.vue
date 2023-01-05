<template>
    <div>
        <div v-for="dan in allDans" :key="dan.id">
            <DanItem :dan="dan"/>
        </div>
    </div>
</template>

<script>
import DanItem from '@/components/DanItem';
import { mapGetters } from 'vuex';

export default {
    components : {
        DanItem
    },
    computed: {
       ...mapGetters(['allDans']) 
    }
}
</script>

<style scoped>

</style>
