import { RotatingLines, ProgressBar } from 'react-loader-spinner';

export const LoaderCreate = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="0.65"
      width="20"
      visible={true}
    />
  );
};

export const LoaderDelete = () => {
  return (
    <ProgressBar
      height="60"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="red"
      barColor="#ffff"
    />
  );
};
