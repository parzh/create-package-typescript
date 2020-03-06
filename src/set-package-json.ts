import { resolve } from "path"
import { readFile, writeFile } from "fs"
import { promisify } from "util"

/** @private */
const read = promisify(readFile);

/** @private */
const write = promisify(writeFile);

export default async function setPackageJson(repo: string, name: string): Promise<void> {
	const filePath = resolve(repo, "package.json");
	const oldContents = await read(filePath, "utf8");

	console.log(`Setting "name" field:\n${ name }\n`);

	const entries = Object.entries(JSON.parse(oldContents));

	entries.unshift([ "name", name ]);

	const author = entries.findIndex(([ key ]) => key === "author");

	if (author !== -1)
		entries.splice(author, 1);

	const newContents = JSON.stringify(Object.fromEntries(entries), null, 2);

	await write(filePath, newContents);
};
