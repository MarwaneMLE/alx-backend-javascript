import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup(){
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const { body } = results[0];       // Assuming uploadPhoto returns an object with 'body'
      const { firstName, lastName } = results[1]; // Assuming createUser returns an object with 'firstName' and 'lastName'

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
