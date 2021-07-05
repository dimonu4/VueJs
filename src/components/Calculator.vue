<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" /> ={{ result }}
    </div>
    <div class="keyboard">
      <button v-on:click="result = operand1 + operand2">+</button>
      <button v-on:click="result = operand1 - operand2">-</button>
      <button v-on:click="result = operand1 * operand2">*</button>
      <button v-on:click="result = operand1 / operand2">/</button>
      <button v-on:click="pow">a^b</button>
      <button v-on:click="div">Floor</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    pow() {
      let temp = this.operand1;
      for (let i = 1; i < this.operand2; i++) {
        temp = temp * this.operand1;
      }
      this.result = temp;
    },
    div() {
      let temp;
      temp = this.operand1 / this.operand2;
      this.result = Math.floor(temp);
    },
  },
};
</script>

<style>
</style>