import axios from 'axios'

export async function fetchingRandomJoke () 
{
    return axios.get('https://api.chucknorris.io/jokes/random')
  .then(({data}) => {
    return data.value;
  })
  .catch( (error) => {
    console.error(error);
  });
}

//fetchingRandomJoke();