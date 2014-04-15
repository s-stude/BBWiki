module.exports = {
    basic: {
        options: {
            port: 4000,
            base: '<%= vars.connectroot %>'
        }
    },
    alive: {
        options: {
            keepalive: true,
            port: 4000,
            base: '<%= vars.connectroot %>'
        }
    }
};