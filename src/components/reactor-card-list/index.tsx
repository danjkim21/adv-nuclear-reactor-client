import { Skeleton } from '@mui/material';
import { ReactorInterface } from '../../types/reactors';
import ReactorCard from '../reactor-card';

interface ReactorCardListInterface {
  reactors: ReactorInterface[] | undefined;
  isLoading: boolean;
}

function ReactorCardList({ reactors, isLoading }: ReactorCardListInterface) {
  if (reactors === undefined || isLoading) {
    // TODO: figure out how to make skeleton auto fit width of parent container
    return (
      <div className="container container__cards container__cards--all">
        <Skeleton variant="rounded" height={255} width={300} />
        <Skeleton variant="rounded" height={255} width={300} />
        <Skeleton variant="rounded" height={255} width={300} />
        <Skeleton variant="rounded" height={255} width={300} />
      </div>
    );
  }

  const reactorCards = reactors.map((reactor) => {
    return <ReactorCard key={reactor._id} data={reactor} />;
  });

  return (
    <div className="container container__cards container__cards--all">
      {reactorCards}
    </div>
  );
}

export default ReactorCardList;
