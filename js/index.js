const url = "https://anbo-restbookquerystring.azurewebsites.net/api/books"
// Change to another REST url to check it's availability (CORS etc)
// No CORS http://vejr.eu/api.php?location=Roskilde&degree=C

Vue.createApp({
    data() {
        return {
            url: null,
            message: null
        }
    },
    /*async created() {
        console.log("created")
        try {
            const response = await axios.get(url)
            this.message = response.data
        } catch (error) {
            this.message = error.message
        }
    },*/
    methods: {
        async checkCORS(url) {
            try {
                if (url == null || url.length < 1) {
                    this.message = "No URL specified"
                    return
                }
                const response = await axios.get(url) 
                this.message = "CORS is OK"
            } catch (error) {
                this.message = error.message
                
                
            }
        }
    }
}).mount("#app")