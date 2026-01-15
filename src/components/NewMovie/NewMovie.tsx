import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';
import { validateTitle, validateUrl } from '../../helpers/validations';

interface Props {
  onAdd: (movie: Movie) => void;
}

export const NewMovie = ({ onAdd }: Props) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState<string>('');

  const isValidForSubmit = !!(title && imgUrl && imdbUrl && imdbId);

  const handleTitle = (newTitle: string): void => {
    setTitle(newTitle);
  };

  const handleDescr = (newDescr: string): void => {
    setDescr(newDescr);
  };

  const handleImgUrl = (newImgUrl: string): void => {
    setImgUrl(newImgUrl);
  };

  const handleImdbUrl = (newImdbUrl: string): void => {
    setImdbUrl(newImdbUrl);
  };

  const handleImdbId = (newImdbId: string): void => {
    setImdbId(newImdbId);
  };

  const onSubmit = () => {
    onAdd({ title, description: descr, imgUrl, imdbUrl, imdbId });

    handleTitle('');
    handleDescr('');
    handleImgUrl('');
    handleImdbUrl('');
    handleImdbId('');

    setCount(count + 1);
  };

  return (
    <form className="NewMovie" key={count}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleTitle}
        validateValue={validateTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={descr}
        onChange={handleDescr}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={handleImgUrl}
        validateValue={validateUrl}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={handleImdbUrl}
        validateValue={validateUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={handleImdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isValidForSubmit}
            onClick={event => {
              event.preventDefault();
              onSubmit();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
