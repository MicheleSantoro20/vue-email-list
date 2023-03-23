const {
    createApp
} = Vue

createApp({
    data() {
        return {
            randomMail: []
        }
    },
    methods: {

    },

    mounted() {

            for (let i = 1; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.randomMail.push(response.data.response) ;
                    })
            }
        }

}).mount('#app')