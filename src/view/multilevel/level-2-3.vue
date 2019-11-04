<template>
  <div>多级菜单 -> 二级-3</div>
</template>
<script>
export default {
  name: 'level_2_3',
  data () {
    return {

    }
  },
  mounted () {
    let pid = 10034;
    localStorage.setItem('pid', pid)
  }
}
</script>
