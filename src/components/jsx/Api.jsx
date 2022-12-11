import React from "react";
import axios from "axios";

const Api = () => {
  //   const [xData, setData] = useState("");

  const likky = async () => {
    try {
      const api = await axios.get("https://api.github.com/users");
      const data = await api.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const x = likky();
  x.then((x) => {
    x.map((i) => {
      console.log(i);
    });
  });
  return <h2>hello</h2>;
};

export default Api;
