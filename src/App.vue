<template>
  <HeaderDisplay />
  <WeatherContent />
</template>

<script>
import HeaderDisplay from "./components/HeaderDisplay";
import WeatherContent from "./components/weather/WeatherContent";

export default {
  name: "App",
  components: {
    HeaderDisplay,
    WeatherContent,
  },
};
</script>

<style></style>
