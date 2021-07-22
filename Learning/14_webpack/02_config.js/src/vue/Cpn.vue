<template>
    <div>    
        <h2>組件cpn</h2>
        <h2>{{message}}</h2>
    </div>

</template>

<script>
export default {
    name: "Cpn",
    data(){
        return {
        message: 'cpn我是組件內的message'
        }
    }
}
</script>