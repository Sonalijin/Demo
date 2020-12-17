import axios from "axios";
const instance = create.axios({
  baseURL: "http://localhost:3000/",
});

instance.get("");
export default instance;
