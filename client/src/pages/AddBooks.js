import React, {useState} from 'react';
import Authorlist from '../components/AuthorList';
import { useMutation } from 'react-apollo-hooks';
import { addBookMutation } from '../queries/queries';

const AddBooks = () => {

  const [addBooks, setAddBooks] = useState({ name: '', genre: '', author_id: '' });
  const ADD_BOOKS = useMutation(addBookMutation);

  const handleChange = (event) => {
    setAddBooks({
      ...addBooks,
      [event.target.name]: event.target.value,
    });
  }

  const saveBook = () => (
    ADD_BOOKS({variables: {...addBooks}})
  );

  
  return (
    <div id="add-book">
      <form>
        Kitap ismi: 
          <input name ="name" type="text" onChange={handleChange}/>
        <br />
        Kitap türü: 
          <input name="genre" type="text" onChange={handleChange}/>
        <br />
        Yazar: 
          <Authorlist author={(author_id) => setAddBooks({...addBooks, author_id})}/>
        <br />
        <input type="submit" onClick={saveBook}/>
      </form>
    </div>
  );
}

export default AddBooks;