<template>
  <div>ini Header</div>
  <pre>State: {{ counter }}</pre>
  <pre>Getters: {{ getCount }}</pre>
  <pre>Getters doubleCount: {{ doubleCount }}</pre>
  <pre>Getters dividedByTwo: {{ dividedByTwo }}</pre>
  <pre>Pokemon:{{ pokemonDetails }}</pre>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
import { usePokemonStore } from "../stores/pokemon";

const counterStore = useCounterStore();
const pokemonStore = usePokemonStore();

const counter = computed(() => counterStore.count);
const getCount = computed(() => counterStore.getCount);
const doubleCount = computed(() => counterStore.doubleCount);
const dividedByTwo = computed(() => counterStore.dividedByNumber(2));

const pokemonDetails = computed(() => pokemonStore.pokemonDetails);

counterStore.$subscribe((mutation, state) => {
  console.log(mutation, state, "Subscribe to changes like watcher");
});
</script>
<style></style>
