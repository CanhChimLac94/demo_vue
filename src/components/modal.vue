<template>
  <div class="modal-waper">
    <div class="mdl-container">
      <div class="mdl-header">
        <div class="mdl-title" >
            <span>{{ title }}</span>
        </div>
        <div class="btl-close">
            <span>Close</span>
        </div>
      </div>
      <div class="mdl-body">
        <slot name="conten"></slot>
      </div>
      <div class="mdl-footer">
          <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
    props: {
        title: {
          type: String,
          default: "Modal"
        }

    },
    data: {

    }
}
</script>

