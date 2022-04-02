module.exports = (options) => {


    return {
        ...options,
        externals: [],
        plugins: [
            ...options.plugins,
        ],
        output: {
            ...options.output,
            libraryTarget: 'commonjs2',
        },
    };
};