<template>
    <form class="formWorkHours" v-on:input="eventChange">
        <template v-for="(range, index) in ranges">
            <InputTimeRange v-bind:value="ranges[index]" v-on:input="eventChange"/>
        </template>

        <div class="totalDuration">
            {{ totalDuration }}
        </div>
        {{ count }}

        <div class="buttonGroup" v-if="showAddRangeButton">
            <button type="button" class="button button--iconOnly" v-on:click="addRange">
                <span class="buttonIcon">➕</span>
                <span class="buttonLabel">Hinzufügen</span>
            </button>
        </div>
    </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import InputTimeRange from './InputTimeRange.vue'

export default {
    components: {
        InputTimeRange
    },
    data() {
        return {
            showAddRangeButton: false
        }
    },
    computed: {
        ...mapState({
            ranges: state => state.workHours,
            count: state => state.count
        }),
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

            // TODO use a mutation
            //this.ranges.push({});
        },
        eventChange: function (event) {
            console.warn("CHANGE Form")
            console.log("VALUE: ", this.ranges)
            this.$store.commit('saveWorkHours', this.ranges)
        }
    }
}
</script>

<style lang="scss">
.formWorkHours {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;

    .inputTimeRange {
        flex: 1;
        margin: .5rem;
    }

    .totalDuration {
        margin: 1rem 0;
        font-size: 1.5rem;
        text-align: center;
    }

    .buttonGroup {
        margin: 1rem 0;
    }
}
</style>
