package uceva.cleanarchitecture.domain.entity;

import java.time.Instant;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Modelo que representa un libro del catálogo")
public class Book {
    @Schema(description = "Identificador único del libro", example = "1")
    private final int id;

    @Schema(description = "Título de la obra", example = "Cien años de soledad")
    private final String title;

    @Schema(description = "Identificador del autor", example = "1")
    private final int authorId;

    @Schema(description = "Número ISBN del libro", example = "978-3-16-148410-0")
    private final String isbn;

    @Schema(description = "Fecha de publicación", example = "1967-05-30T00:00:00Z")
    private final Instant publicationYear;

    @Schema(description = "Editorial del libro", example = "Editorial Sudamericana")
    private final String publisher;

    @Schema(description = "Número de páginas", example = "400")
    private final int pages;

    @Schema(description = "Descripción o sinopsis", example = "Una obra maestra de la literatura hispanoamericana")
    private final String description;

    @Schema(description = "Idioma del libro", example = "Spanish")
    private final Language language;

    @Schema(description = "Género literario", example = "Fantasy")
    private final Genre genre;

    @Schema(description = "URL de la imagen de portada", example = "https://picsum.photos/seed/book-1/160/240")
    private final String coverImageUrl;

    @Schema(description = "URL del archivo PDF", example = "https://samplepdf.org/files/sample.pdf")
    private final String pdfUrl;

    public Book(int id, String title, int authorId, String isbn, Instant publicationYear,
            String publisher, int pages, String description, Language language, Genre genre,
            String coverImageUrl, String pdfUrl) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.isbn = isbn;
        this.publicationYear = publicationYear;
        this.publisher = publisher;
        this.pages = pages;
        this.description = description;
        this.language = language;
        this.genre = genre;
        this.coverImageUrl = coverImageUrl;
        this.pdfUrl = pdfUrl;
    }

    public int getId() { return id; }
    public String getTitle() { return title; }
    public int getAuthorId() { return authorId; }
    public String getIsbn() { return isbn; }
    public Instant getPublicationYear() { return publicationYear; }
    public String getPublisher() { return publisher; }
    public int getPages() { return pages; }
    public String getDescription() { return description; }
    public Language getLanguage() { return language; }
    public Genre getGenre() { return genre; }
    public String getCoverImageUrl() { return coverImageUrl; }
    public String getPdfUrl() { return pdfUrl; }
}
