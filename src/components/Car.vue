<template>
  <div class="container-fluid">
    <div class="row">
      <h3>List Car</h3>
      <div class="col-md-12 car" v-for="item in listCar" :key="item.id">
        <el-card :body-style="{ padding: '10px' }" shadow="never">
          <div class="row">
            <div class="col-md-4">
              <img :src="item.image_path" class="image" />
            </div>
            <div class="col-md-4">
              <div>
                <h4>{{ item.name }}</h4>
              </div>
              <div>
                <h4>
                  <i class="el-icon-shopping-cart-2">Stock: </i
                  >{{ item.numberOfStocks }}
                </h4>
              </div>
              <div>
                <el-tag type="info">{{ item.price }} $</el-tag>
                <span :class="getCarStatusStyle(item.available)">{{
                  item.available == 1 ? "Available" : "Not Available"
                }}</span>
              </div>
            </div>
            <div class="col-md-4">
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="bottom clearfix">
            <el-button type="text" class="button">Details</el-button>
          </div>
        </el-card>
      </div>
      <div class="col-md-12 data-pagnination">
        <el-pagination
          v-if="totalRecord > 0"
          background
          layout="prev, pager, next"
          :page-count="totalPages"
          :total="totalRecord"
          @current-change="changePage"
          @prev-click="changePage"
          @next-click="changePage"
        >
        </el-pagination>
      </div>
    </div>
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
      listCar: [],
      currentPage: 1,
      totalRecord: 0,
      totalPages: 0,
      filter: {
        page: 1,
        limit: 10,
      },
    };
  },
  mounted() {
    this.getListOfCars();
  },
  methods: {
    async getListOfCars() {
      let response = await CarService.getAll(this.filter);
      if (response) {
        this.listCar = [];
        this.listCar = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalRecord = response.data.total;
        this.totalPages = response.data.to;
      }
    },
    getCarStatusStyle(status) {
      if (status == 1) {
        return "available-status";
      }
      return "unavailable-status";
    },
    changePage(page) {
      this.filter.page = page;
      this.getListOfCars();
    },
  },
};
</script>
<style scoped>
.car {
  margin-bottom: 1rem;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 60%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.available-status {
  color: #40b883;
}
.unavailable-status {
  color: rgb(255, 136, 0);
}
.data-pagnination {
  text-align: center;
  padding-top: 1rem;
}
</style>
