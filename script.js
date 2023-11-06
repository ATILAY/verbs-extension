// Vue.js 2'ye özgü yapılandırma ve instance oluşturma
new Vue({
    el: '#app',
    data: {
        selected: 0,
        words: window.words, // Bu 'words' array'ini global scope'ta tanımlamanız gerekir
    },
    methods: {
        getRandomVerb: function() {

            this.selected = Math.floor(Math.random() * this.words.length);
        },
        cekimFunc(verb, index) {
            const pronouns = ['je ', 'tu ', 'il/elle ', 'nous ', 'vous ', 'ils/elles '];
            return pronouns[index] +'<b>'+ verb+'</b>';
        }
    }
});
