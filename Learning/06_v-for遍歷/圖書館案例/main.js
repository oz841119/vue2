const app = new Vue({
    el: '#app',
    data: {
        books: [
            { id: 1, name: '《算法導論》', date: '2006-9', price: 85.00, count: 1, },
            { id: 2, name: '《UNIX編程藝術》', date: '2006-2', price: 59.00, count: 1, },
            { id: 3, name: '《編程珠璣》', date: '2008-10', price: 39.00, count: 1, },
            { id: 4, name: '《代碼大全》', date: '2006-3', price: 128.00, count: 1, },
        ]
    },

    computed: {
        totalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.books.length; i++) {
                totalPrice = totalPrice + this.books[i].price * this.books[i].count;
            }
            return totalPrice
        }
    },

    methods: {
        getFinalPrice(price) {
            return `$${price.toFixed(2)}`
        },

        increment(index) {
            app.books[index].count++
        },

        decrement(index) {
            if (app.books[index].count > 1) {
                app.books[index].count--
            }
        },

        removeClick(index) {
            app.books.splice(index, 1);
        }
    }
})