<template>
    <div id="CompDocuments">
        <h1 class="page-header">Tài liệu VueJS</h1>
    <hr />
    <CompDirectives/>
    <CompComputedAndWatcher/>
    <CompSlide />
    <CompAxios />
    </div>
</template>
<script>
import CompComputedAndWatcher from './comp_document/CompComputedAndWatcher/CompComputedAndWatcher.vue';
import CompDirectives from './comp_document/CompDirectives/CompDirectives.vue';
import CompSlide from './comp_document/CompSlide/CompSlide.vue';
import CompAxios from './comp_document/CompAxios/CompAxios.vue';
export default {
    name:'CompDocuments',
    components:{
        CompDirectives,
        CompComputedAndWatcher,
        CompSlide,
        CompAxios
    }
}
</script>
<style>
.sub-header{
    font-weight: 700;
    font-size: 16px;
    border: none;
    color: #3ab39b;
}
</style>