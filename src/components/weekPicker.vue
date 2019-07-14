<template>
  <div class="week-picker">
    <p>
      <span>This is value:</span>
      <span>{{ value }}</span>
    </p>
  </div>
</template>

<script>
function trace(obj, msg) {
  console.log(msg);
  console.log(obj);
}

export default {
  name: "WeekPicker",
  props: ["value"],
  data() {
    return {
      count: 0,
      week_year: {
        week: 1,
        year: 1990
      }
    };
  },
  methods: {
    getLocalWeek() {
      var now = Date.now();
    },
    setCurrentDate() {
      var cr_year = new Date().getFullYear();
      var start = new Date(cr_year, 0, 1, 1, 0);
      trace(start.getMonth(), "start date: ");
    }
  },
  mounted() {
    this.setCurrentDate();
  },
  created() {
    //   this.setCurrentDate();
  }
};
</script>

<style scoped>
.week-picker {
  width: 200px;
  height: 200px;
  background-color: #e1e1e1;
  color: #fff;
}
</style>

