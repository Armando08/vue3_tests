const axios = require('axios')

class DataService {
    private accessToken: string = 'd8e6b43a0be31f4b99da24a01209ba78de9ea414643a4ca070c4a7211bde6b2b'
    getAllPosts(): Promise<any> {
      return axios.get("https://gorest.co.in/public/v2/posts");
    }
  
    getAllTodos(): Promise<any> {
      return axios.get(`https://gorest.co.in/public/v2/todos`);
    }
  
    getAllUsers(): Promise<any> {
      return axios.get(`https://gorest.co.in/public/v2/users?access-token=${this.accessToken}`);
    }  
  }
  
  export default new DataService();