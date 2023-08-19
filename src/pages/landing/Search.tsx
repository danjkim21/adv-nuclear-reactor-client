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
  const selectOptions = data.map((reactor) => {
    return { value: reactor._id, label: reactor.name };
  });

  //  TODO: Update Select Styling to match arDB theme
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      // color: state.isSelected ? "#212529" : "#fff",
      // backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
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
          className='basic-single'
          classNamePrefix='select'
          name='reactor-select'
          placeholder={
            isLoading ? 'Fetching reactor data' : 'Input reactor name'
          }
          isLoading={isLoading}
          isClearable={true}
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
