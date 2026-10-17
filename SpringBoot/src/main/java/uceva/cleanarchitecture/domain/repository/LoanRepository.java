package uceva.cleanarchitecture.domain.repository;

import uceva.cleanarchitecture.domain.entity.Loan;

import java.util.List;
import java.util.Optional;

public abstract class LoanRepository {
    public abstract List<Loan> getAll(int countLoans);
    public abstract Optional<Loan> getById(int id);
}
