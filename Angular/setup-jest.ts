import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

// Faker se publica como ESM y los tests de repositorios solo necesitan
// comprobar la delegación hacia DataService. Un mock global evita que Jest
// intente cargar el bundle ESM en cada suite.
jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      productName: jest.fn(() => 'Producto Test'),
      price: jest.fn(() => '10.00'),
    },
    person: {
      firstName: jest.fn(() => 'Juan'),
      lastName: jest.fn(() => 'Pérez'),
    },
    number: {
      int: jest.fn(() => 30),
    },
    internet: {
      email: jest.fn(() => 'test@mail.com'),
    },
    helpers: {
      arrayElement: jest.fn((values: unknown[]) => values[0]),
    },
    lorem: {
      sentence: jest.fn(() => 'Reporte de prueba'),
    },
    date: {
      recent: jest.fn(() => new Date('2026-01-15T10:30:00.000Z')),
    },
  },
}));
