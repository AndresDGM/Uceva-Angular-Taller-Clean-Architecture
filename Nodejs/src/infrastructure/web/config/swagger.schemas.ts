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
export {};

/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       description: Representa un libro del catálogo
 *       required:
 *         - id
 *         - title
 *         - authorId
 *         - isbn
 *         - publicationYear
 *         - publisher
 *         - pages
 *         - description
 *         - language
 *         - genre
 *         - coverImageUrl
 *         - pdfUrl
 *       properties:
 *         id: { type: integer, example: 1 }
 *         title: { type: string, example: Cien años de soledad }
 *         authorId: { type: integer, example: 1 }
 *         isbn: { type: string, example: 978-3-16-148410-0 }
 *         publicationYear: { type: string, format: date-time, example: '1967-05-30T00:00:00.000Z' }
 *         publisher: { type: string, example: Editorial Sudamericana }
 *         pages: { type: integer, example: 400 }
 *         description: { type: string, example: Una obra maestra de la literatura hispanoamericana }
 *         language: { type: string, example: Spanish }
 *         genre: { type: string, example: Fiction }
 *         coverImageUrl: { type: string, format: uri, example: 'https://picsum.photos/seed/book-1/160/240' }
 *         pdfUrl: { type: string, format: uri, example: 'https://samplepdf.org/files/sample.pdf' }
 */
