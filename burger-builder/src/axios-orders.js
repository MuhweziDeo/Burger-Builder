import axios from 'axios';

const instance=axios.create({
  baseURL:'https://react-burger-builder-fc34a.firebaseio.com/'
})

export default instance; 
