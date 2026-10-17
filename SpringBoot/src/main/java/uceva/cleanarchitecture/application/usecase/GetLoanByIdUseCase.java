package uceva.cleanarchitecture.application.usecase;

import uceva.cleanarchitecture.domain.entity.Loan;
import uceva.cleanarchitecture.domain.repository.LoanRepository;

import java.util.Optional;

public class GetLoanByIdUseCase {

    private final LoanRepository loanRepository;

    public GetLoanByIdUseCase(LoanRepository loanRepository){
        this.loanRepository = loanRepository;
    }

    public Optional<Loan> execute(int id){
        return loanRepository.getById(id);
    }

}
