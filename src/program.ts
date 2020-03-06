import type { Command } from "commander";
import commander from "commander";

/** @private */
interface Program extends Command {
	in?: string;
}

/** @public */
const program: Program = commander
	.name("create-package-javascript")
	.usage("<name> [--in <path>]")
	.option("<name>", "valid package name\nsee https://github.com/npm/validate-npm-package-name#naming-rules")
	.option("-p, --in <path>", "path for new package code\nrelative to process's current working directory")
	;

/** @private */
const examples = [
	"npm init package-javascript my-package",
	"npm init package-javascript my-foo-package --in my-packages/foo",
] as const;

program.on("--help", () => {
	console.log("\nExamples:");

	for (const example of examples)
		console.log("  " + example);
});

export default program.parse(process.argv);
