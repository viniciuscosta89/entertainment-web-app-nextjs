import { SearchbarInput as Input } from './Searchbar.styles';
import { SearchbarInputProps } from './Searchbar.types';

export default function SearchbarInput({ placeholder, handleChange, value }: SearchbarInputProps) {
  return <Input placeholder={placeholder} onChange={e => handleChange(e)} value={value} />;
}
