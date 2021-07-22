<template>
    <div>
        <h2 class="cff">{{message}}</h2>
        <button @click="btnClick">按鈕</button>
        <h2>{{name}}</h2>
        <Cpn style="color: blue"></Cpn>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
    name: 'App',
    components: {
        Cpn
    },
    data() {
        return {
            message: 'Hello Webpack',
            name: 'Vue.js'
        }
    },
    methods: {
        btnClick() {}
    }
}
</script>

<style scoped>
    .cff {
        color: red
    }
</style>