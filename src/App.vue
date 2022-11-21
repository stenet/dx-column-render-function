<script setup>
import { ref } from 'vue';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import { useDefaults } from './use-defaults';

const { FirstNameColumn, SayHelloButton } = useDefaults();

const data = ref([
  {
    f: 'AAA',
    l: 'BBB',
  },
  {
    f: 'CCC',
    l: 'DDD',
  },
  {
    f: 'EEE',
    l: 'FFF',
  },
]);
</script>

<template>
  <SayHelloButton />
  <DxDataGrid :data-source="data">
    <FirstNameColumn />
    <DxColumn data-field="l" caption="Last name" />
  </DxDataGrid>
</template>

<style scoped></style>
