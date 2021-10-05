<template>
  <div>
    <div class="container d-flex justify-content-center">
      <input type="range" class="form-range" v-model="value" min="0" max="10" style="max-width:250px"/>
      <div>Price: {{ value }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "0",
    };
  },
};
</script>
