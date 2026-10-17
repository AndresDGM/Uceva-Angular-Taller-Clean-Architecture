package uceva.cleanarchitecture.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI cleanArchitectureOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Uceva Clean Architecture API")
                        .version("1.0")
                        .description("API de usuarios, productos, libros y préstamos"));
    }
}
