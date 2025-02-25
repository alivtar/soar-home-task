import HolyLoader from 'holy-loader';

export type ReactLoaderProps = {
  showSpinner?: boolean;
};
export const ReactLoader = ({ showSpinner = false }: ReactLoaderProps) => {
  const loaderColor = '#396AFF';
  return (
    <HolyLoader
      height={3}
      zIndex={99999}
      color={loaderColor}
      showSpinner={showSpinner}
    />
  );
};
