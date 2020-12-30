<template>
    <div class="card">
        <div class="card__top">
            <h3 class="card__title">{{ title }}</h3>
            <i class="card__menu fas fa-ellipsis-h"></i>
        </div>

        <list-item
            v-for="listItem in list"
            :key="listItem"
            :body="listItem"
        ></list-item>
        <button class="card__add btn-normal btn">&#43; Add another card</button>
    </div>
</template>

<script>
import ListItem from '@/components/List/ListItem.vue'
export default {
    components: {
        ListItem,
    },
    props: {
        title: String,
    },
    data() {
        return {
            list: ['Walk the dog', 'Create a website'],
        }
    },
}
</script>

<style lang="scss">
.card {
    margin: 5rem;
    width: 30rem;
    max-width: 30rem;
    background: lightgrey;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1.4rem;
    &__menu {
        transition: all 0.2s;
        &:hover {
            cursor: pointer;
            transform: scaleX(1.2);
            color: rgba(0, 0, 0, 0.6);
        }
    }
    &__top {
        padding: 0 0.5rem;
        margin: 0.5rem 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    &__title {
        font-weight: bold;
        color: var(--color-black);
        font-size: inherit;
    }
    &__add {
        margin: 0.7rem 0;
        color: var(----color-black);
        opacity: 0.6;
        font-size: inherit;
    }
}
</style>
