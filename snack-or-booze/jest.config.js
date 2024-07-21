module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    transform: {'^.+\\.jsx?$': 'babel-jest',},
    transformIgnorePatterns: ['/node_modules/(?!axios/)'],
    globals: { 'babel-jest': { useESM: true, }},
};