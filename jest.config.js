const setup = {
    verbose: true,
    testEnvironment: "jest-environment-jsdom",
    // setupFiles: ["./jest.setup.js"],

    // add this line to fix the error unexpected token import css
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
    },
    setupFiles: ["jest-canvas-mock"], // add this line to fix the error "ReferenceError: HTMLCanvasElement is not defined"
};

export default setup;
