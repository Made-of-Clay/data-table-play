<template>
    <article class="dataTable">
        <header>
            <input v-model="searchTerm" type="text" placeholder="Search...">
        </header>

        <table>
            <thead>
                <tr>
                    <td
                        v-for="column in columns"
                        :key="column.key"
                        :class="{ 'dataTable__col--sortable': column.sortable }"
                        class="dataTable__col"
                        @click="column.sortable ? sortCol(column.key) : null"
                    >
                        {{ column.label }}
                        <span v-if="column.sortable" class="dataTable__sort-icon">
                            <!-- TODO add sort toggle display logic -->
                            ▲
                        </span>
                    </td>
                </tr>
            </thead>
            <tbody>
                <!-- TODO replace data with filtered and sorted data eventually -->
                <tr
                    v-for="row in filteredData"
                    :key="row[rowKey]"
                    class="dataTable__row"
                >
                    <td v-for="column in columns" :key="column.key" class="dataTable__cell">
                        <template v-if="column.key === 'aliases'">
                            {{ row[column.key].join(', ') }}
                        </template>
                        <template v-else>
                            {{ row[column.key] }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>

        <footer>
            "Showing {currentPage} of {totalPages} pages ({{ data.length }} items [{{ filteredData.length }} filtered])"
            first, previous, 1, 2, 3, next, last
        </footer>
    </article>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import { Column } from '../models/Column';
import { filterData } from '../filterData';
import { Avenger } from '../models/Avenger';

const props = defineProps({
    data: {
        type: Array as PropType<Avenger[]>,
        required: true,
    },
    columns: {
        type: Array as PropType<Column[]>,
        required: true,
    },
    rowKey: {
        type: String,
        default: 'id',
    },
});

function sortCol(key: string) {
    console.log('sort column by key', key);
    // TODO write sort function to be shared across all implementations
}

const searchTerm = ref('');
const filteredData = computed(() => filterData<Avenger[]>(props.data, searchTerm.value, props.columns));
</script>