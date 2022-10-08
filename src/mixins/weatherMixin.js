import axios from "axios";
//Mixins를 쓰는 이유는 컴포넌트마다 data를 정의하고 불러오는것이 반복적이고 비효율적이기 때문에
//이렇게 코딩한다.

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeatherInfo(city) {
      console.log(process.env);

      const API_KEY = process.env.VUE_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
      const res = await axios.get(url);
      const { main, wind, weather } = res.data;
      const weatherResult = {
        label: city.label,
        code: city.code,
        temperature: this.displayTemperature(main.temp),
        humidity: main.humidity,
        wind: wind.speed,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
      };
      return weatherResult;
    },
    displayTemperature(temperature) {
      return (temperature - 273.15).toFixed(1);
    },
  },
};

export default weatherMixin;
