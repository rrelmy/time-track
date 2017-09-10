<template>
    <div class="inputTime">
        <input type="time" v-bind:value="value" v-on:input="updateValue($event.target.value)">
        <button type="button" v-on:click="setToNow" tabindex="-1">{{ icon || defaultIcon }}</button>
    </div>
</template>

<script>

    export default {
        props: ['icon', 'value'],
        data() {
            return {
                defaultIcon: '🕖'
            }
        },
        // TODO compute emoji based on time
        methods: {
            updateValue: function (value) {
                this.$emit('input', value)
            },
            setToNow: function (event) {
                event.preventDefault()
                this.updateValue((new Date()).toTimeString().substr(0, 5))
            }
        }
    }
</script>

<style lang="scss">
    .inputTime {
        display: inline-flex;
        border: 1px solid var(--lineColor);
        border-radius: var(--borderRadius);
        max-width: 180px;
        overflow: hidden;

        input {
            flex: 1 1 auto;
            border: 0;
            padding: 0.5rem;
            background: transparent;
            min-width: 0;
        }

        button {
            border: 0;
            background: transparent;
            padding: 0 0.25rem;
            font-size: 1.2rem;
        }

        @media (min-width: 720px) {
            button {
                padding: 0 0.5rem;
            }
        }
    }
</style>
