const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: "search",
        }
    },
    methods: {
        changeCurrentPage(changePage){
            this.currentPage = changePage
        },
    }
}).mount('#app')