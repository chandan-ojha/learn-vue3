app.component('product-display',{
    props: {
        premimum: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
         <div class="product-container">
             <div class="product-image">
                     <img :src="image">
                 <!--<img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">-->
             </div>
             <div class="product-info">
                 <h1>{{ title }}</h1>
                 <!--<a :href="url">Made by Vue Mastery</a>-->
                 <!--<p v-if="inventory > 10">In Stock</p>
                 <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                 <p v-else>Out of Stock</p>-->
                 <p v-if="inStock">In Stock</p>
                 <p v-else>Out of Stock</p>
                 <p>Shipping: {{ shipping }}</p>
                 <!--<ul>
                     <li v-for="detail in details">{{detail}}</li>
                 </ul>-->
                 <product-details :details="details"></product-details>
                 <!--<ul>
                     <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
                 </ul>-->
                 <div
                         v-for="(variant,index) in variants"
                         :key="variant.id"
                         @mouseover="updateVariant(index)"
                         class="color-circle"
                         :style="{ backgroundColor: variant.color }">
                 </div>
                 <button
                         class="button"
                         :class="{ disabledButton: !inStock }"
                         :disabled="!inStock"
                         @click="addToCart">
                     Add to Cart
                 </button>
                 <button
                         class="button"
                         :class="{ disabledButton: !inStock }"
                         :disabled="!inStock"
                         @click="removeFromCart">
                     Remove Item
                 </button>
             </div>
         </div>
         <review-list v-if="reviews.length" :reviews="reviews"></review-list>
         <review-from @review-submitted="addReview"></review-from>
      </div>`,
      data(){
         return {
             product: 'Socks',
             brand: 'Vue Mastery',
             selectedVariant: 0,
             details: ['50% cotton','30% wool','20% polyester'],
             sizes: ['S', 'M', 'L', 'XL'],
             variants: [
                 {id: 2234, color:'green', image: './assets/images/socks_green.jpg',quantity:50},
                 {id: 2235, color:'blue', image: './assets/images/socks_blue.jpg',quantity:0},
             ],
             reviews: []
         }
      },
      methods:{
        addToCart(){
            /*this.cart += 1;*/
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            /*if (this.cart >= 1) {
                this.cart -= 1
            }*/
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping(){
            if(this.premimum){
                return 'Free'
            }
            return 2.99
        }
    }

})