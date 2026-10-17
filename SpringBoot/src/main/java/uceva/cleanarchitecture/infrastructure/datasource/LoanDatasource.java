package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Loan;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class LoanDatasource {

    private Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] statuses = {
            "ACTIVE",
            "RETURNED",
            "OVERDUE"
    };

    public List<Loan> getAll(int countLoans){
        List<Loan> loans = new ArrayList<Loan>();
        for (int i = 1; i <= countLoans; i++) {
            loans.add(generateLoan(i));
        }
        return loans;
    }

    private Loan generateLoan(Integer id){
        Date loanDateFaker = faker.date().past(30, java.util.concurrent.TimeUnit.DAYS);
        LocalDate loanDate = loanDateFaker.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate returnDate = loanDate.plusDays(faker.number().numberBetween(7, 30));

        return new Loan(
                id,
                faker.number().numberBetween(1, 100),
                faker.number().numberBetween(1, 100),
                loanDate.toString(),
                returnDate.toString(),
                randomStatus()
        );
    }

    private String randomStatus() {
        return statuses[random.nextInt(statuses.length)];
    }

}
