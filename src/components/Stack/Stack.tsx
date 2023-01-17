import style from './style.module.scss';
import type { StackProps } from './types.d';

export default function Stack({}: StackProps) {
	return <div className={style.root}></div>;
}
