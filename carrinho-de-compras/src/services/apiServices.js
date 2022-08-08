import Api from './api'

const ApiService = {
  getAll: () => {
    return Api.get('all').then((response) => response)
    .catch((err) => {
      console.log('Error' + err);
    })
  },
  getById: (id) => { 
    return Api.get(`${id}`).then((response) => response)
    .catch((err) => {
      console.log('Error' + err);
    })
  }

}

export default ApiService