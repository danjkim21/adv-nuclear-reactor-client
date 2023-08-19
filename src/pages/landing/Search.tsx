import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

interface SearchProps {
  data: ReactorInterface[];
  handleInputSelection(any): void;
  handleSearchReactor(e: any): void;
  isLoading: boolean;
}

function Search({
  data,
  handleInputSelection,
  handleSearchReactor,
  isLoading,
}) {
  const selectOptions = data.map((reactor) => {
    return { value: reactor._id, label: reactor.name };
  });

  // const reactorSelections = data.map((reactor) => {
  //   return (
  //     <option key={reactor._id} value={reactor.name}>
  //       {reactor.name}
  //     </option>
  //   );
  // });

  return (
    <div className='container container__appSearch'>
      {/* <form className='form__appSearch' onSubmit={searchReactor}>
        <input
          className='searchBtn'
          type='text'
          list='reactors'
          name='searchReactor'
          id='searchReactor'
          placeholder={
            isLoading ? 'Fetching reactor data' : 'Input reactor name'
          }
        /> */}

      {/* Test Spinner on isLoading */}
      {/* {isLoading && (
          <FontAwesomeIcon
            className='searchSpinner'
            icon={faSpinner}
            spinPulse
          />
        )}

        <datalist id='reactors'>{reactorSelections}</datalist>
        <input className='submitBtn' type='submit' value={`Search Database`} />
      </form> */}

      <form className='form__appSearch' onSubmit={handleSearchReactor}>
        <Select
          className='basic-single'
          classNamePrefix='select'
          isLoading={isLoading}
          isClearable={true}
          isSearchable={true}
          name='reactor-select'
          options={selectOptions}
          onChange={handleInputSelection}
        />
        <input className='submitBtn' type='submit' value={`Search Database`} />
      </form>
    </div>
  );
}

export default Search;
