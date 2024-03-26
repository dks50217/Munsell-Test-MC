const mixin = {
    data: function () {
        return {
            
        }
    },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        getJSON(path) {
            let fullPath = 'json/' + path;
            const request = axios.get(fullPath)
                .then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.log(error)
                });

            return {
                load: request
            };
        }
    }
}