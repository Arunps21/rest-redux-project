import axios from "axios";

//api to access all restaurants data
export const getData = async () => {
  const result = await axios.get("/restaurant.json");
  console.log(result.data.restaurants);
};
