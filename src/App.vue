<template>
    <div id="app">
        <AppHeader></AppHeader>

        <main>
            <FormWorkhours />
        </main>
    </div>
</template>

<script>
    import AppHeader from './components/Header.vue'
    import FormWorkhours from './components/FormWorkHours.vue'

    export default {
        name: 'app',
        components: {
            AppHeader,
            FormWorkhours
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    #app {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    main {
        padding: 0.5rem;
        flex: 1;
        display: flex;
        align-items: center;
    }
</style>
