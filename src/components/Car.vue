<template>
  <div class="col-md-12">
    <p>List Car</p>
  </div>
</template>
<script>
import Car from "../models/car";
export default {
  name: "Car",
  data() {
    return {
      user: new Car("", "", "", "", "", ""),
      loading: false,
    };
  },
};
</script>
