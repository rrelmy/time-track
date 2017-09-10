<template>
    <form class="formWorkHours">
        <template v-for="(range, index) in ranges">
            <InputTimeRange v-model="ranges[index]"/>
        </template>

        <div class="totalDuration">
            {{ totalDuration }}
        </div>

        <div class="buttonGroup" v-if="showAddRangeButton">
            <button type="button" class="button button--iconOnly" v-on:click="addRange">
                <span class="buttonIcon">➕</span>
                <span class="buttonLabel">Hinzufügen</span>
            </button>
        </div>
    </form>
</template>

<script>
    import InputTimeRange from './InputTimeRange.vue'

    export default {
        components: {
            InputTimeRange
        },
        data() {
            return {
                showAddRangeButton: false,
                ranges: [{}, {}]
            }
        },
        computed: {
            totalDuration: function () {
                let duration = 0;

                this.ranges.forEach(function (item) {
                    if (item.duration) {
                        duration += Number(item.duration)
                    }
                })

                if (duration === 0) {
                    return ''
                }

                return duration.toFixed(2)
            }
        },
        methods: {
            addRange: function (event) {
                // TODO create a remove range way
                event.preventDefault()

                this.ranges.push({});
            }
        }
    }
</script>

<style lang="scss">
    .formWorkHours {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        flex: 1;

        .inputTimeRange {
            flex: 1;
            margin: 0.5rem;
        }

        .totalDuration {
            margin: 1rem 0;
            text-align: center;
            font-size: 1.5rem;
        }

        .buttonGroup {
            margin: 1rem 0;
        }
    }
</style>
