import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
}: SearchProps) {
  const selectOptions = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((reactor) => {
      const reactorFullName =
        reactor.name !== reactor.fullName ? `(${reactor.fullName})` : '';
      const reactorLabel = `${reactor.name} ${reactorFullName}`;

      return {
        value: reactor.name,
        label: reactorLabel,
      };
    });

  //  TODO: Update Select Styling to match arDB theme
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      border: 'none',
      boxShadow: 'none',
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
    }),
  };

  return (
    <div className='container container__appSearch'>
      <form className='form__appSearch' onSubmit={handleSearchReactor}>
        <Select
          className='react-select-container'
          classNamePrefix='react-select'
          name='reactor-select'
          placeholder={
            isLoading ? 'Fetching reactor data' : 'Input reactor name'
          }
          isLoading={isLoading}
          // isClearable={true}
          isSearchable={true}
          options={selectOptions}
          onChange={handleInputSelection}
          styles={customStyles}
        />
        <input className='submitBtn' type='submit' value={`Search Database`} />
      </form>
    </div>
  );
}

export default Search;
