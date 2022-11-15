import {defineStore} from "pinia";

export let useCounterStore = defineStore('counter',{
    //data
   state(){
       return {
           count: 5
       };
   },

    //methods
    actions: {
       increment(){
           if(this.count < 10){
              this.count++;
           }
       }
    },

    //computed properties
    getters: {
       remaining(){
           return 10 - this.count;
       }
    }
});