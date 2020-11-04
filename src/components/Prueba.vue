<template>
   <div>
        <form @submit.prevent="pushData">
            <h1>Nombre</h1>
            <input type="text" v-model="fruta">
            <p v-for="(item,index) in frutas" :key="index">{{item}}</p>
        </form>

        <p v-if="frutas.length != 2">Hay mas de dos frutas</p>
        <p v-else>Muchso Aceptados</p>
   </div>
    

</template>

<script>
export default {
    data(){
        return{
            fruta: '',
            frutas:['manzana','pera']
        }
    },
    methods: {
        pushData(){
            this.frutas.push(this.fruta)
            this.fruta = '';
        }
    }
}
</script>