import { base } from "@theholocron/eslint-config";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...base(),
	{ ignores: ["node_modules/"] },
];

export default config satisfies Linter.Config[];
