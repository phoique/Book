import React, {useState} from 'react';
import Authorlist from '../components/AuthorList';

const AddBooks = () => {

  const [addBooks, setAddBooks] = useState({ name: '', genre: '', author_id: '' });

  const handleChange = (event) => {
    setAddBooks({
      ...addBooks,
      [event.target.name]: event.target.value,
    });
  }

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
        <input type="submit"/>
      </form>
    </div>
  );
}

export default AddBooks;