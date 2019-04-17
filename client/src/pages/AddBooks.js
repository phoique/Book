import React, {useState} from 'react';

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
      <p>
        a {addBooks.name}
      </p>
      <p>
      b {addBooks.genre}
      </p>
      <p>
      c {addBooks.author_id}
      </p>
      
      <form>
        Kitap ismi: 
          <input name ="name" type="text" onChange={handleChange}/>
        <br />
        Kitap türü: 
          <input name="genre" type="text" onChange={handleChange}/>
        <br />
        Yazar: 
          <select name="author_id" onChange={handleChange}>
            <option>Yazar seçin.</option>
              <option value="deneme">deneme</option>)
          </select>
        <br />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default AddBooks;