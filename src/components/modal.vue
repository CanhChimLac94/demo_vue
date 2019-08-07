<template>
  <div class="modal-waper" v-if="is_show">
    <div class="mdl-container">
      <div class="mdl-header">
        <div class="mdl-title">
          <span>{{ title }}</span>
        </div>
        <div class="btl-close" @click="close">
          <slot name="close">
            <span>&#9747;</span>
          </slot>
        </div>
      </div>
      <div class="mdl-body">
        <slot name="conten">
          <span>Demo conten</span>
        </slot>
      </div>
      <div class="mdl-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<style>
.modal-waper {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(218, 219, 219, 0.7);
}
.modal-waper .mdl-container {
  margin: auto;
  background-color: #fff;
  padding: 15px;
  padding-top: 10px;
}
.modal-waper .mdl-container .mdl-header {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
}
.modal-waper .mdl-container .mdl-header .mdl-title,
.modal-waper .mdl-container .mdl-header .btl-close {
  flex-grow: 1;
  /* width: 100%; */
  padding: 5px;
}
.modal-waper .mdl-container .mdl-header .mdl-title {
  color: #299bdb;
}
.modal-waper .mdl-container .mdl-header .btl-close {
  cursor: pointer;
  flex-grow: unset;
  color: #b7b7b7;
  font-size: 1.25rem;
}
.modal-waper .mdl-container .mdl-body {
  color: #8c8c8c;
}
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Modal"
    },
    // isShow: {
    //   type: Boolean,
    //   default: true
    // },
    showDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      is_show: this.showDefault,
      test_data: "hihi"
    };
  },
  methods: {
    close: function(e) {
      e.stopPropagation();
      this.is_show = false;
      // this.$emit("update:isShow", false);
    },
    open: function() {
      this.is_show = true;
      // this.$emit("update:isShow", true);
    }
  },
  mounted: function() {},
  watch: {}
};
</script>

