module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  modulePathIgnorePatterns: ['/node_modules/', '/dist/'],
  // This stuff is required for path aliases to work
  moduleDirectories: [
    '.',
    'src',
    'src/constants',
    'src/controllers',
    'src/middleware',
    'src/models',
    'src/routers',
    'node_modules',
  ],
  moduleNameMapper: {
    '@~/(.*)': 'src/$1',
    '@constants/(.*)': 'src/constants/$1',
    '@controllers/(.*)': 'src/controllers/$1',
    '@middleware/(.*)': 'src/middleware/$1',
    '@models/(.*)': 'src/models/$1',
    '@routers/(.*)': 'src/routers/$1',
  },
};
