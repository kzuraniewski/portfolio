append() {
	touch $1
	printf '%s\n' "$2" >>$1
}

cd src/components

# Create new empty component template
mkdir $1
cd $1

# index.ts
append index.ts "import $1 from './$1';

export * from './types.d';
export default $1;"

# <Component>.tsx
append $1.tsx "import style from './style.module.scss';
import type { $1Props } from './types.d';

export default function $1({}: $1Props) {
	return <div className={style.root}></div>;
}"

# style.module.scss
append style.module.scss ".root {
}"

# types.d.ts
append types.d.ts "export type $1Props = {};"
