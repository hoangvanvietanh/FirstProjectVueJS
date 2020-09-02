<template>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" v-on:click="setLeftPaginate()" href="#">Previous</a>
    </li>
    <li
      class="page-item"
      v-for="index in numberOfPages"
      v-bind:key="index "
      v-on:click="setActivePaginate(index)"
      v-bind:class="{active: selectedPagination === index}"
    >
      <a class="page-link" href="#">{{index}}</a>
    </li>
    <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>-->
    <li class="page-item">
      <a class="page-link" v-on:click="setRightPaginate()" href="#">Next</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "CompPagination",
  data() {
    return {};
  },
  props: {
    user: Object,
    selectedPagination: Number,
    list_posts: Array
  },

  methods: {
    setActivePaginate: function (index) {
      this.$parent.selectedPagination = index;
    },
    setLeftPaginate: function () {
      if (this.$parent.selectedPagination > 1) {
        this.$parent.selectedPagination--;
      }
    },
    setRightPaginate: function () {
      if (this.list_posts) {
        if (this.$parent.selectedPagination < Math.ceil(this.list_posts.length / 4)) {
          this.$parent.selectedPagination++;
        }
      }
    },
  },
  computed: {
    numberOfPages() {
      //console.log("=====>"+this.list_posts.length / 4)
  
        if (this.list_posts.length < 4) {
          return 1;
        }
        
        return Math.ceil(this.list_posts.length / 4);

    },
  },
};
</script>
<style>
</style>