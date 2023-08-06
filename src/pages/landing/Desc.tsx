interface DescProps {
  appDesc: string;
}

function Desc({ appDesc }: DescProps) {
  return (
    <div className='container container__appDesc'>
      <p className='text__appDesc'>{appDesc}</p>
    </div>
  );
}

export default Desc;
