<template>
  <div>多级菜单 -> 二级-1</div>
</template>
<script>
export default {
  name: 'level_2_1',
  data () {
    return {

    }
  },
  mounted () {
    let pid = 2;
    localStorage.setItem('pid', pid)
  }
}
</script>
