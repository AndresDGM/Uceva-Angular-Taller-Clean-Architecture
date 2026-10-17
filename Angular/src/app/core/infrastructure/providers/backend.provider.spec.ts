import { selectBackendRepository } from './backend.provider';

describe('selectBackendRepository', () => {
  it('debería seleccionar la implementación local', () => {
    expect(selectBackendRepository('local', 'local', 'node', 'spring')).toBe('local');
  });

  it('debería seleccionar la implementación Node.js', () => {
    expect(selectBackendRepository('node', 'local', 'node', 'spring')).toBe('node');
  });

  it('debería seleccionar la implementación Spring Boot', () => {
    expect(selectBackendRepository('springboot', 'local', 'node', 'spring')).toBe('spring');
  });
});
