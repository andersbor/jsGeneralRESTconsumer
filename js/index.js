const url = "http://anbo-bookstorerest.azurewebsites.net/api/books"
// Change to another REST url to check it's availability (CORS etc)

Vue.createApp({
    data() {
        return {
            message: null
        }
    },
    async created() {
        console.log("created")
        try {
            const response = await axios.get(url)
            this.message = response.data
        } catch (error) {
            this.message = error.message
        }
    }
}).mount("#app")