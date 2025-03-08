import { getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';
// for merged promises
// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

// const getBookDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
//     const bookObject = await getSingleBook(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
//     const authorObject = await getSingleAuthor(bookObject.author_id); // this function uses the data response from the bookObject

//     return { ...bookObject, authorObject };
//   };

export default getBookDetails;
