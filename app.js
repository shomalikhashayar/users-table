//API => https://reqres.in/api/users?page=1"

const url = "https://reqres.in/api/users?page=1";

Vue.createApp({
  data() {
    return {
      usersList: [],
      messageFromKhashayar:
        "... I used Axios library to fetch data from API to my table ...",
      waterMark: "Khashayar Shomali",
    };
  },
  mounted() {
    axios.get(url).then((res) => {
      this.usersList = res.data.data;
      console.log(res.data.data);
      console.log(this.waterMark);
    });
  },
}).mount("#app");
