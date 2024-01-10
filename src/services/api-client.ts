import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb0f902017dc453688fb0e71db20a090",
  },
});
