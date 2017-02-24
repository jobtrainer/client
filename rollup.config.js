import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import buble from "rollup-plugin-buble";
import postcss from "rollup-plugin-postcss";
import replace from 'rollup-plugin-replace';

import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnano from 'cssnano';
import postcssimport from 'postcss-import';

export default {
    entry: "src/index.js",
    dest: "build/app.js",
    format: "umd",
    moduleName: "jobtrainer",
    plugins: [
        postcss({
            plugins: [
                postcssimport(),
                simplevars(),
                nested(),
                cssnano()
            ],
            extensions: ['.scss'],
        }),
        nodeResolve(),
        commonjs(),
        buble({
            exclude: "node_modules/**"
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    external: [ "react" , "Immutable"]
}