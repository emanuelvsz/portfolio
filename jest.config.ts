import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@api/(.*)': '<rootDir>src/infra/api/$1',
    '@mock/(.*)': '<rootDir>src/infra/mock/$1',
    '@cache/(.*)': '<rootDir>src/core/cache/$1',
    '@static/(.*)': '<rootDir>src/core/static/$1',
    '@interfaces/(.*)': '<rootDir>src/core/interfaces/$1',
    '@typing/(.*)': '<rootDir>src/core/domain/types/$1',
    '@models/(.*)': '<rootDir>src/core/domain/models/$1',
    '@language/(.*)': '<rootDir>src/core/language/$1',
    '@services/(.*)': '<rootDir>src/core/services/$1',
    '@utils/(.*)': '<rootDir>src/core/utils/$1',
    '@web/(.*)': '<rootDir>src/ui/web/$1',
    '@tests/(.*)': '<rootDir>src/tests/$1',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
} as Config;
