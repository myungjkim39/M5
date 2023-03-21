import axios from 'axios'

export const getTest = async () => {
  try {
    console.log("Before request");
    const res = await axios.get("http://localhost:8080/test");
    console.log("Response:", res); // add this line
    console.log("After request");
    return res.data[1].message;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
