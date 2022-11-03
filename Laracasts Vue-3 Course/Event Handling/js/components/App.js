import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },

    template:
        `<div class="grid gap-6">
              <assignments></assignments> 
              
              <panel>
                   Hello Again?
              </panel>
         </div>
        `,
    props: {
        add: Object
    }
}