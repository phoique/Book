import React from 'react';
import { getAuthorsQuery } from '../queries/queries';
import { useQuery } from 'react-apollo-hooks';

const AuthorList = ({ author }) => {

  const { data, error, loading } = useQuery(getAuthorsQuery);

  if (loading) {
    return <div>Kitaplar yükleniyor...</div>;
  };

  if (error) {
    return <div>Bir sorun oluştu: {error.message}</div>;
  };

  return (
    <select name="author_id" onChange={({target}) => author(target.value)}>
      <option>Yazar seçin.</option>
      {
        data.authors.map(author => 
          <option
            key={author.id} 
            value={author.id}>
            {author.name}
          </option>)
      }
      
    </select>
  );
}

export default AuthorList;
