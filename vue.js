const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: "main",
        }
    },
    methods: {
        changeCurrentPage(changePage){
            this.currentPage = changePage
        },
    }
}).mount('#app')