<template>
  <header class="header">
    <h2>Weather Application</h2>
    <p>{{ username }} 님 반갑습니다.</p>
  </header>
</template>

<script>
export default {
  name: "HeaderDisplay",
  data() {
    return {
      username: "Yongari",
    };
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(15deg, #00b4db, #0083b0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

.header h2 {
  color: #fff;
}

.header p {
  font-size: 12px;
  color: #fff;
}
</style>
