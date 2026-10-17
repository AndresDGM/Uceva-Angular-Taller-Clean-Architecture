package uceva.cleanarchitecture.infrastructure.repository;

import uceva.cleanarchitecture.domain.entity.Loan;
import uceva.cleanarchitecture.domain.repository.LoanRepository;
import uceva.cleanarchitecture.infrastructure.datasource.LoanDatasource;

import java.util.List;
import java.util.Optional;

public class LoanRepositoryImpl extends LoanRepository {

    private final LoanDatasource loanDatasource;

    public LoanRepositoryImpl(LoanDatasource loanDatasource){
        this.loanDatasource = loanDatasource;
    }

    @Override
    public List<Loan> getAll(int countLoans) {
        return loanDatasource.getAll(countLoans);
    }

    @Override
    public Optional<Loan> getById(int id) {
        return loanDatasource.getAll(100).stream()
                .filter(loan -> loan.id != null && loan.id == id)
                .findFirst();
    }
}
