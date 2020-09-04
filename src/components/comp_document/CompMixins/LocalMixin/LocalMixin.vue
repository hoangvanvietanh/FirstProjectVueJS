
<script>
//LocalMixin.vue
export default {
   data () {
     return {
      greeting: 'Hello I am a mixin',
   }
   },
   created: function () {
      console.log('Mixin was applied!');
   },
   methods: {
      greet() {
         //console.log(this.greeting + " from Method");
         return this.greeting + " from Method";
      }
   }
   
}
</script>