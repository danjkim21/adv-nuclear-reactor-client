import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { getReactors } from "../../../../api/reactorsApi";
import { useMemo } from "react";

interface SearchProps {
  handleInputSelection(selectOption): void; // Add type for selectOption
  handleSearchReactor(e: React.FormEvent<HTMLFormElement>): void;
}

function Search({ handleInputSelection, handleSearchReactor }: SearchProps) {
  // Fetch list of all reactors for search input dropdown
  const { data: reactorQuery, isLoading } = useQuery({
    queryKey: ["reactors"],
    queryFn: getReactors,
  });

  const selectOptions = useMemo(() => {
    return reactorQuery
      ?.sort((a, b) => a.name.localeCompare(b.name))
      .map((reactor) => {
        const reactorFullName =
          reactor.name !== reactor.fullName ? `(${reactor.fullName})` : "";
        const reactorLabel = `${reactor.name} ${reactorFullName}`;

        return {
          value: reactor.name,
          label: reactorLabel,
        };
      });
  }, [reactorQuery]);

  //  TODO: Update Select Styling to match arDB theme
  const customStyles = {
    option: (defaultStyles) => ({
      ...defaultStyles,
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
    }),
  };

  return (
    <div className="container container__appSearch">
      <form className="form__appSearch" onSubmit={handleSearchReactor}>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          name="reactor-select"
          placeholder={
            isLoading ? "Fetching reactor data" : "Input reactor name"
          }
          isLoading={isLoading}
          isSearchable={true}
          options={selectOptions}
          onChange={handleInputSelection}
          styles={customStyles}
        />
        <input className="submitBtn" type="submit" value={`Search Database`} />
      </form>
    </div>
  );
}

export default Search;
