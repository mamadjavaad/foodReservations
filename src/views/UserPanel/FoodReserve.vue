<script setup>
import { ref } from 'vue'

const selected = ref([])
const selectedFood = ref(['چلو جوجه کباب , نوشیدنی 10000', 'چلو جوجه کباب , نوشیدنی 10000', 'چلو جوجه کباب , نوشیدنی 10000', 'چلو جوجه کباب , نوشیدنی 10000', 'چلو جوجه کباب , نوشیدنی 10000', 'چلو جوجه کباب , نوشیدنی 10000', 'چلو جوجه کباب , نوشیدنی 10000'])
const selectedRestaurant = ref(['مرکزی', 'مرکزی', 'مرکزی', 'مرکزی', 'مرکزی', 'مرکزی', 'مرکزی'])
const headers = [
    { title: 'تاریخ', align: 'center', value: 'date' },
    { title: 'انتخاب غذا', align: 'center', value: 'food' },
    { title: 'انتخاب سلف', align: 'center', value: 'restaurant' },

]


const items = [
    {
        day: 'شنبه',
        date: '1401/12/10',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],

    },
    {
        day: 'یکشنبه',
        date: '1401/12/11',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],
    },
    {
        day: 'دوشنبه',
        date: '1401/12/13',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],
    },
    {
        day: 'سه شنبه',
        date: '1401/12/14',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],
    },
    {
        day: 'چهارشنبه',
        date: '1401/12/15',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],
    },
    {
        day: 'پنج شنبه',
        date: '1401/12/16',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],
    },
    {
        day: 'جمعه',
        date: '1401/12/17',
        foodOptions: ['چلو جوجه کباب , نوشیدنی 10000', 'سبزی پلو با ماهی , نوشیدنی 6000'],
        selfOptions: ['خلیج فارس', 'مرکزی', 'موسوی'],
    },
]
</script>
<template>
    <v-main class="d-flex flex-column w-100 flex-wrap align-center ">
        <v-tabs align-tabs="center" color="#359662">
            <v-tab :value="1">شام</v-tab>
            <v-tab :value="3">نهار</v-tab>
            <v-tab :value="2">صبحانه</v-tab>
        </v-tabs>

        <v-btn color="#dde382" class="mt-4" size="large" prepend-icon="mdi-page-next-outline">هفته بعد</v-btn>

        <div class="reserve-table mt-3 py-2 text-center rounded-lg border">
            <v-locale-provider locale="fa">
                <v-data-table v-model="selected" :headers="headers" :items="items" item-value="date" show-select>
                    <template v-slot:[`item.date`]="{ item }">
                        <div class="d-flex flex-column">
                            <p class="py-1">{{ item.day }}</p>
                            <p>{{ item.date }}</p>
                        </div>
                    </template>
                    <template v-slot:[`item.food`]="{ item, index }">
                        <v-select v-model="selectedFood[index]" class="w-100 mt-4" :items="item.foodOptions"
                            persistent-hint :hint="selectedFood[index]" variant="solo"></v-select>
                    </template>
                    <template v-slot:[`item.restaurant`]="{ item, index }">
                        <v-select v-model="selectedRestaurant[index]" class="w-100 mt-4" :items="item.selfOptions"
                            persistent-hint :hint="selectedRestaurant[index]" variant="solo"></v-select>
                    </template>
                </v-data-table>
            </v-locale-provider>
            <v-btn class="my-5" color="#328458">ذخیره رزرو</v-btn>
        </div>
    </v-main>

</template>
<style scoped>
.reserve-table {
    width: 95% !important;

}

:deep(.v-selection-control__input) {
    color: #328458;
}

:deep(.v-messages__message) {
    display: none !important;
    line-height: normal !important;
    hyphens: none !important;
}

:deep(.v-data-table-footer) {
    display: none;
}

@media screen and (max-width: 700px) {
    :deep(.v-field__field) {
        display: none !important;
    }

    :deep(.v-field) {
        display: flex !important;
        justify-content: center !important;
        padding-inline-end: 0px !important;
        padding:  6px 0px !important;
    }

    :deep(.v-input__details) {
        padding: 13px 0px !important;
        padding-inline: 0px !important;
    }

    :deep(.v-messages__message) {
        display: block !important;
    }

}
</style>