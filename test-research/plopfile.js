module.exports = (plop) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plop.setGenerator('component', require('./plop/generators/component'));
};
