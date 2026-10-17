/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       description: Representa un reporte generado por el sistema
 *       required:
 *         - id
 *         - title
 *         - description
 *         - type
 *         - status
 *         - generatedAt
 *         - totalRecords
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Resumen de usuarios
 *         description:
 *           type: string
 *           example: Reporte con el resumen de usuarios registrados
 *         type:
 *           type: string
 *           enum:
 *             - Usuarios
 *             - Productos
 *             - Actividad
 *             - Inventario
 *           example: Usuarios
 *         status:
 *           type: string
 *           enum:
 *             - Generado
 *             - Pendiente
 *             - Error
 *           example: Generado
 *         generatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-01-15T10:30:00.000Z
 *         totalRecords:
 *           type: number
 *           example: 42
 */
export {};
