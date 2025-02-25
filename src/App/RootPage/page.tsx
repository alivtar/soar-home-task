import { type FC, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const PageRoot: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/panel');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   return <LoaderFull />; // todo
  return null;
};
