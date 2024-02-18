<template>
  <div>ini Footer</div>
  <br />
  <button @click="increment">+ count</button>
  <button @click="decrement">- count</button>
  <button @click="reset">reset</button>
  <br />
  <button @click="incrementWithAction">+ count Action</button>
  <button @click="incrementByNumberWithAction(3)">+3 count Action</button>
  <button @click="decrementWithAction">- count Action</button>
  <hr />
  <button @click="getPokemonDetails('ditto')">GET POKEMON</button>
  <button @click="resetPokemon">reset POKEMON</button>
</template>
<script setup>
import { useCounterStore } from "../stores/counter";
import { usePokemonStore } from "../stores/pokemon";

const counterStore = useCounterStore();
const pokemonStore = usePokemonStore();

const increment = () => {
  counterStore.$patch((state) => {
    state.count++;
  });
};
const decrement = () => {
  counterStore.$patch((state) => {
    state.count--;
  });
};
const reset = () => {
  counterStore.$reset();
};

const incrementWithAction = () => {
  counterStore.increment();
};
const decrementWithAction = () => {
  counterStore.decrement();
};
const incrementByNumberWithAction = (number) => {
  counterStore.incrementByNumber(number);
};

const getPokemonDetails = (name) => {
  pokemonStore.getPokemonDetails(name);
};

const resetPokemon = () => {
  pokemonStore.$reset();
};
</script>
<style></style>
