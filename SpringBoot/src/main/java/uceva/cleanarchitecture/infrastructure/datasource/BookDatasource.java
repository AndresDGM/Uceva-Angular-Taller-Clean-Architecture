package uceva.cleanarchitecture.infrastructure.datasource;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.github.javafaker.Faker;

import uceva.cleanarchitecture.domain.entity.Book;
import uceva.cleanarchitecture.domain.entity.Genre;
import uceva.cleanarchitecture.domain.entity.Language;

public class BookDatasource {
    private final Faker faker = new Faker();
    private final Random random = new Random();

    private final String[] publishers = {
        "Penguin Random House", "HarperCollins", "Simon & Schuster",
        "Hachette Book Group", "Macmillan Publishers", "Oxford University Press"
    };

    private final String[] isbns = {
        "978-3-16-148410-0", "978-0-06-112008-4", "978-0-7432-7356-5",
        "978-0-452-28423-4", "978-0-14-028329-7", "978-0-307-38912-1"
    };

    public List<Book> getAll(int countBooks) {
        List<Book> books = new ArrayList<>();
        for (int id = 1; id <= countBooks; id++) {
            books.add(generateBook(id));
        }
        return books;
    }

    private Book generateBook(int id) {
        return new Book(
                id,
                faker.book().title(),
                random.nextInt(100) + 1,
                isbns[random.nextInt(isbns.length)],
                faker.date().past(3650, java.util.concurrent.TimeUnit.DAYS).toInstant(),
                publishers[random.nextInt(publishers.length)],
                random.nextInt(821) + 80,
                faker.lorem().sentence(12),
                randomEnum(Language.values()),
                randomEnum(Genre.values()),
                "https://picsum.photos/seed/book-" + id + "/160/240",
                "https://samplepdf.org/files/sample.pdf");
    }

    private <T> T randomEnum(T[] values) {
        return values[random.nextInt(values.length)];
    }
}
