<template>
    <div class="inputTimeRange">
        <InputTime v-model="timeFrom" v-on:input="updateValue"/>
        <div class="separator">bis</div>
        <InputTime v-model="timeTo" v-on:input="updateValue" icon="🕔"/>
        <div class="duration">{{ duration }}</div>
    </div>
</template>

<script>
import InputTime from './InputTime.vue'

export default {
    props: ['value'],
    data: function () {
        return {
            timeFrom: null,
            timeTo: null
        }
    },
    components: {
        InputTime
    },
    computed: {
        dateFrom: function () {
            return this.timeToDate(this.timeFrom)
        },
        dateTo: function () {
            return this.timeToDate(this.timeTo)
        },
        duration: function () {
            if (!this.timeFrom || !this.timeTo) {
                return '';
            }

            // convert time strings to dates
            const from = this.dateFrom
            const to = this.dateTo

            // get the duration in ms
            let duration = to - from

            // convert to seconds
            duration /= 1000
            // convert to minutes
            duration /= 60
            // convert to hours
            duration /= 60

            return duration.toFixed(2);
        }
    },
    methods: {
        updateValue: function () {
            const value = {
                from: this.timeFrom,
                to: this.timeTo,
                duration: this.duration,
            };
            this.$emit('input', value)
        },
        timeToDate: function (time) {
            const date = new Date()

            date.setHours(time.substr(0, 2))
            date.setMinutes(time.substr(3, 2))
            date.setSeconds(0)

            return date
        }
    }
}
</script>

<style lang="scss">
.inputTimeRange {
    display: flex;
    flex-wrap: wrap;

    .inputTime {
        flex: 6;
    }

    .separator {
        align-self: center;
        margin: 0 .5rem;
        text-align: center;
    }
    .duration {
        align-self: center;
        min-width: 3em;
        margin-left: 1rem;
        color: var(--lightTextColor);
    }

    @media (min-width: 720px) {
        justify-content: center;
        padding-left: calc(3em + 1rem); // spacing to center the separator

        .separator {
            margin: 0 1rem;
        }
    }
}
</style>
