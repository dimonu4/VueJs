<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" /> ={{ result }} fib = {{ fibResult }}
    </div>
    <div class="fibDisplay"></div>
    <div v-show="error">Ошибка: {{ error }}</div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        v-bind:key="operand"
        v-bind:title="operand"
        v-bind:disabled="operand1 === '' || operand2 === ''"
        v-on:click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>
    <div class="strange_massage">
      <template v-if="this.result < 0">Результат меньше 0</template>
      <template v-else-if="this.result < 100"> Результат меньше 100</template>
      <template v-else>Результат больше 100</template>
    </div>

    <div class="checkBox">
      <input type="checkbox" id="checked" v-model="checked" /> Отобразить
      экранную клавиатуру
    </div>
    <div class="displayKeyboard" v-show="checked">
      <button v-for="key in keys" v-bind:key="key" @click="change(key)">
        {{ key }}
      </button>
      <button @click="erase">&#8592;</button>
      <div>
        <input
          type="radio"
          id="operand1"
          value="operand1"
          v-model="picked"
          checked
        />
        <label for="operand1">Operand1</label>
        <input type="radio" id="operand2" value="operand2" v-model="picked" />
        <label for="operand2">Operand2</label>
      </div>
    </div>
    <div class="log">
      <div v-for="(log, id) in logs" v-bind:key="log">{{ id }}:{{ log }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      result: 0,
      fibResult: 0,
      error: "",
      operands: ["+", "-", "*", "/", "a^b", "floor"],
      logs: {},
      keys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      picked: "",
      checked: false,
    };
  },
  methods: {
    change(number) {
      let { operand1, operand2 } = this;
      if (this.picked === "operand1") {
        operand1 += number;
        this.operand1 = +operand1;
      } else if (this.picked === "operand2") {
        operand2 += number;
        this.operand2 = +operand2;
      }
    },

    erase() {
      let { operand1, operand2 } = this;
      if (this.picked === "operand1") {
        operand1 = operand1.toString();
        this.operand1 = +operand1.slice(0, operand1.length - 1);
      } else if (this.picked === "operand2") {
        operand2 = operand2.toString();
        this.operand2 = +operand2.slice(0, operand2.length - 1);
      }
    },

    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },

    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.subtract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "a^b":
          this.pow();
          break;
        case "floor":
          this.div();
          break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      this.$set(this.logs, key, value);
    },
    add() {
      this.result = this.operand1 + this.operand2;
      this.fibResult = this.fib1 + this.fib2;
    },
    subtract() {
      this.result = this.operand1 - this.operand2;
      this.fibResult = this.fib1 - this.fib2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
      this.fibResult = this.fib1 * this.fib2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя!";
      } else {
        this.result = operand1 / operand2;
        this.fibResult = this.fib1 / this.fib2;
      }
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2);
      this.fibResult = Math.pow(this.fib1, this.fib2);
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя!";
      } else {
        this.result = Math.floor(operand1 / operand2);
        this.fibResult = Math.floor(this.fib1 / this.fib2);
      }
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },
  },
};
</script>

<style>
</style>