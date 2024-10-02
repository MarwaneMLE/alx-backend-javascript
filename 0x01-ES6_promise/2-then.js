export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((error) => {
      console.error('Error occurred:', error);
      return new Error('An error occurred while handling the API response.');
    })
    .finally(() => console.log('Got a response from the API'));
}
