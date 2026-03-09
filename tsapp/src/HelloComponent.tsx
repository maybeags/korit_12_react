import {HelloProps} from './types.ts';

export default function HelloComponent({ name, age } : HelloProps ) {

  return(
    <h1>
      안녕하세요, {name} 님. {name} 님은 올해 {age} 살입니다.
    </h1>
  );
}