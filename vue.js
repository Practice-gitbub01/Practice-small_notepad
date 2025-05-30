const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: "create",
        }
    },
    methods: {
        changeCurrentPage(changePage){
            this.currentPage = changePage
        },
    }
}).mount('#app')