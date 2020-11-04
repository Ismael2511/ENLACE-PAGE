<template>
    <div v-if="show" class="loading-page">
        <transition class="fade">
            <div class="loading-pic">
                <img src="img/logo.png" alt="Logo Enlace">
            </div>
            <div class="loading-text">
                <h2>Cargando...</h2>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'loading-page',
    data(){
        return{
            show:true
        }
    },
    mounted(){
        this.showToggle()
    },
    methods: {
        showToggle(){
            setTimeout(() => {
                this.show = false;
            }, 1500)
        }
    }
}
</script>