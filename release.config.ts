import { defineConfig } from "@theholocron/semantic-release-config";

const packages = ["packages/skills", "packages/skills-docs"];

const packageList = packages.map((p) => `'${p}'`).join(",");

export default defineConfig({
	branches: ["main", { name: "alpha", prerelease: true }],
	exec: {
		prepareCmd: `node -e "const fs=require('fs'),v='\${nextRelease.version}'; [${packageList}].forEach(p=>{const f=p+'/package.json',j=JSON.parse(fs.readFileSync(f));j.version=v;fs.writeFileSync(f,JSON.stringify(j,null,2)+'\\n');});"`,
		publishCmd:
			"pnpm -r --filter='./packages/*' publish --access public --no-git-checks --tag ${nextRelease.channel || 'latest'}",
	},
});
