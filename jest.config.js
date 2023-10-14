const nextJest = require('next/jest')

const createJestConfig = nextJest({ 
    // Provide the path to your Next.js app to load next.config.js in your test environment
    dir: '.'
})

// Add any custom config to be passed to jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/src/app(.*)$': '<rootDir>/src$1',
        '^@/src/components(.*)$': '<rootDir>/components$1',
        '^@/lib(.*)$': '<rootDir>/lib$1',
        '^@/pages(.*)$': '<rootDir>/pages$1',
        '^@/utils(.*)$': '<rootDir>/utils$1',
    },
    testEnvironment: 'jest-environment-jsdom',
}
 
//createJestCOnfig is exported this way to ensure that next/jest can load the Next.js config which is async

module.exports = createJestConfig(customJestConfig)



