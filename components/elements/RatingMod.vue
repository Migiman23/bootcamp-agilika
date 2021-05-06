<template>
    <div class="row ml-0">
        <span class="ps-rating mb-2" v-for="(star, index) in 5" :key="index">
            <i v-if="rating >= star" class="fa fa-star mr-1"></i>
            <i v-else class="fa fa-star-o mr-1"></i>
        </span>
        <span>{{rating}}</span>
    </div>
</template>

<script>
export default {
    name: 'Rating',
    props: {
        rating: {
            type: Number,
            default: 0
        }
    },
};
</script>

<style></style>
