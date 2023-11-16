import { LoadingIcon } from './Loading.styles';

function Loading() {
  return <LoadingIcon initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />;
}

export default Loading;
