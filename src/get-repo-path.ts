import { cwd } from "process";
import { resolve } from "path";
import program from "./program";

/**
 * @param {string} name Package name (assume is valid). Used as a fallback if path is unspecified
 */
export default function getRepoPath(name: string): string {
	return resolve(cwd(), program.in ?? name);
};
