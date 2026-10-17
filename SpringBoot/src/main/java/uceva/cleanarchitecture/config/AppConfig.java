package uceva.cleanarchitecture.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uceva.cleanarchitecture.application.usecase.GetAllBooksUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllLoansUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllProductsUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllUsersUseCase;
import uceva.cleanarchitecture.application.usecase.GetLoanByIdUseCase;
import uceva.cleanarchitecture.domain.repository.BookRepository;
import uceva.cleanarchitecture.domain.repository.LoanRepository;
import uceva.cleanarchitecture.domain.repository.ProductRepository;
import uceva.cleanarchitecture.domain.repository.UserRepository;
import uceva.cleanarchitecture.infrastructure.datasource.BookDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.LoanDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.ProductDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.UserDatasource;
import uceva.cleanarchitecture.infrastructure.repository.BookRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.LoanRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.ProductRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.UserRepositoryImpl;

@Configuration
public class AppConfig {

    @Bean
    UserDatasource userDatasource(){
        return new UserDatasource();
    }

    @Bean
    ProductDatasource productDatasource(){
        return new ProductDatasource();
    }

    @Bean
    BookDatasource bookDatasource(){
        return new BookDatasource();
    }

    @Bean
    LoanDatasource loanDatasource(){
        return new LoanDatasource();
    }

    @Bean
    UserRepository userRepository(UserDatasource userDatasource) {
        return new UserRepositoryImpl(userDatasource);
    }

    @Bean
    ProductRepository productRepository(ProductDatasource productDatasource) {
        return new ProductRepositoryImpl(productDatasource);
    }

    @Bean
    BookRepository bookRepository(BookDatasource bookDatasource) {
        return new BookRepositoryImpl(bookDatasource);
    }

    @Bean
    LoanRepository loanRepository(LoanDatasource loanDatasource) {
        return new LoanRepositoryImpl(loanDatasource);
    }

    @Bean
    GetAllUsersUseCase getAllUsersUseCase(UserRepository userRepository) {
        return new GetAllUsersUseCase(userRepository);
    }

    @Bean
    GetAllProductsUseCase getAllProductsUseCase(ProductRepository productRepository) {
        return new GetAllProductsUseCase(productRepository);
    }

    @Bean
    GetAllBooksUseCase getAllBooksUseCase(BookRepository bookRepository) {
        return new GetAllBooksUseCase(bookRepository);
    }

    @Bean
    GetAllLoansUseCase getAllLoansUseCase(LoanRepository loanRepository) {
        return new GetAllLoansUseCase(loanRepository);
    }

    @Bean
    GetLoanByIdUseCase getLoanByIdUseCase(LoanRepository loanRepository) {
        return new GetLoanByIdUseCase(loanRepository);
    }

}
