import '../assets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Search({ data, searchReactor, isLoading }) {
  const reactorSelections = data.map((reactor) => {
    return (
      <option key={reactor._id} value={reactor.name}>
        {reactor.name}
      </option>
    );
  });

  return (
    <div className='container container__appSearch'>
      <form className='form__appSearch' onSubmit={searchReactor}>
        <input
          className='searchBtn'
          type='text'
          list='reactors'
          name='searchReactor'
          id='searchReactor'
          placeholder={
            isLoading ? 'Fetching reactor data' : 'Input reactor name'
          }
        />

        {/* Test Spinner on isLoading */}
        {isLoading && (
          <FontAwesomeIcon
            className='searchSpinner'
            icon={faSpinner}
            spinPulse
          />
        )}

        <datalist id='reactors'>{reactorSelections}</datalist>
        <input className='submitBtn' type='submit' value={`Search Database`} />
      </form>
    </div>
  );
}

export default Search;
