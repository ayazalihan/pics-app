import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID FFG9iVDBWAt0NAh4fNUSCJY5gc3HVC_66lkWPxJazqI",
  },
});
