append() {
	touch $1
	printf '%s\n' "$2" >>$1
}

cd src/components

# <Component>.tsx
append $1.tsx "export type $1Props = {};

export default function $1({}: $1Props) {
	return <div className=\"\"></div>;
}"

# Append to src/components/index.ts
append index.ts "export { default as $1 } from './$1';"
