import { MouseEventHandler, CSSProperties } from 'react';

export type SVGIconProps = {
  fill?: string;
  height?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGElement> | undefined;
  style?: CSSProperties;
};

export { default as Heart } from './Heart';
export { default as Comment } from './Comment';
export { default as MyProfile } from './MyProfile';
export { default as Search } from './Search';
export { default as Kakao } from './Kakao';
export { default as Close } from './Close';
export { default as More } from './More';
export { default as Check } from './Check';
export { default as Picture } from './Picture';
export { default as WriteIcon } from './WriteIcon';
export { default as Mypage } from './Mypage';
export { default as Home } from './Home';
export { default as ArrowDown } from './ArrowDown';
export { default as Back } from './Back';
export { default as Setting } from './Setting';
export { default as ArrowNext } from './ArrowNext';
export { default as GomingOut } from './GomingOut';
export { default as Bell } from './Bell';
export { default as Camera } from './Camera';
export { default as Folder } from './Folder';
export { default as Location } from './Loaction';
