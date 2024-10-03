import axios from "axios";
import { FAILURE, SUCCESS } from "../constants/restConstant";

//api to access all restaurants data
export const getData = async (dispatch) => {
  try {
    const result = await axios.get("/restaurant.json");
    console.log(result.data.restaurants);
    dispatch({
      payload: result.data.restaurants,
      type: SUCCESS,
    })
  } catch (err) {
    console.log("In Error", err);
    dispatch({
      payload: err,
      type: FAILURE,
    })
  }
};
