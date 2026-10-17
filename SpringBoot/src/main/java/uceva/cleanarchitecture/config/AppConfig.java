package uceva.cleanarchitecture.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uceva.cleanarchitecture.application.usecase.GetAllProductsUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllReportsUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllUsersUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllBooksUseCase;
import uceva.cleanarchitecture.domain.repository.BookRepository;
import uceva.cleanarchitecture.domain.repository.ProductRepository;
import uceva.cleanarchitecture.domain.repository.ReportRepository;
import uceva.cleanarchitecture.domain.repository.UserRepository;
import uceva.cleanarchitecture.infrastructure.datasource.ProductDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.ReportDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.UserDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.BookDatasource;
import uceva.cleanarchitecture.infrastructure.repository.ProductRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.ReportRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.UserRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.BookRepositoryImpl;

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
    ReportDatasource reportDatasource(){
        return new ReportDatasource();
    }

    @Bean
    BookDatasource bookDatasource(){
        return new BookDatasource();
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
    ReportRepository reportRepository(ReportDatasource reportDatasource) {
        return new ReportRepositoryImpl(reportDatasource);
    }

    @Bean
    BookRepository bookRepository(BookDatasource bookDatasource) {
        return new BookRepositoryImpl(bookDatasource);
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
    GetAllReportsUseCase getAllReportsUseCase(ReportRepository reportRepository) {
        return new GetAllReportsUseCase(reportRepository);
    }

    @Bean
    GetAllBooksUseCase getAllBooksUseCase(BookRepository bookRepository) {
        return new GetAllBooksUseCase(bookRepository);
    }

}
