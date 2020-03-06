import validate from "validate-npm-package-name";
import program from "./program";

export default function getPackageName(): string {
	const [ name ] = program.args;

	const {
		validForNewPackages,
		errors = [],
		warnings = [],
	} = validate(name);

	if (!validForNewPackages)
		throw new Error(`${ [ ...errors, ...warnings ][0] ?? "Invalid package name" }: "${ name }"`);

	return name;
};
