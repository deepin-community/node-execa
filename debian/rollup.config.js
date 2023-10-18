import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {builtinModules} from 'module';
const file = process.env.DEST_FILE;

const config = {
	input: process.env.START_FILE,
	output: [{
		format: 'cjs',
		file: file,
		preferConst: true,
		interop: 'auto',
		freeze: false,
		strict: false
	}],
	external: builtinModules,
	plugins: [
        commonjs(),
        nodeResolve({
            moduleDirectories: ['node_modules'],
        }),
	]
}

export default config;
