export default {
    template:
    `<form @submit.prevent="add">
         <div class="border border-gray-600 text-black flex w-full">
            <input v-model="newAssignment" placeholder="New assignment..." class="p-2 w-full">
            <button type="submit" class="bg-white p-2 border-l">Add</button>
         </div>
    </form>`,

    data(){
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){
            this.$emit('add',this.newAssignment);

            this.newAssignment = ''
        }
    }
}