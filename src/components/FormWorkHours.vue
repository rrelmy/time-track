<template>
    <form class="formWorkHours" v-on:input="eventChange">
        <template v-for="(range, index) in ranges">
            <InputTimeRange v-model="ranges[index]" v-on:input="eventChange"/>
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
        ranges: function () {
            // create a copy of the real data to be able to manipulate it at will and save it back
            // TODO find a better way …
            return JSON.parse(JSON.stringify(this.$store.state.workHours));
        },
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
