<template>
  <div class="col-md-12">
    <p>List Car</p>
  </div>
</template>
<script>
import Car from "../models/car";
import CarService from "../services/car.service";
export default {
  name: "Car",
  data() {
    return {
      user: new Car("", "", "", "", "", ""),
      loading: false,
      filter: {
        page: 1,
        limit: 5,
      },
    };
  },
  mounted() {
    this.getListOfCars();
  },
  methods: {
    async getListOfCars() {
      console.log("Hellomama");
      let response = await CarService.getAll(this.filter);
      console.log(response);
    },
  },
};
</script>
