/** Backends disponibles para las implementaciones de repositorios. */
export type Backend = 'local' | 'node' | 'springboot';

/**
 * Selecciona una implementación concreta sin exponerla a la aplicación.
 */
export function selectBackendRepository<T>(
  backend: Backend,
  localRepository: T,
  nodeRepository: T,
  springBootRepository: T,
): T {
  switch (backend) {
    case 'node':
      return nodeRepository;
    case 'springboot':
      return springBootRepository;
    case 'local':
    default:
      return localRepository;
  }
}
