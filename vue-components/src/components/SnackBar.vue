<template>
  <div class="SnackBar">
      <h1>{{snackType}}</h1>
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'SnackBar',
  props: {
    snackType: String,
    msg: String
  }
}
</script>