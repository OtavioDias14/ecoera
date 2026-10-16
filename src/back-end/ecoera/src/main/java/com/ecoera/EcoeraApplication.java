

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.ecoera", "controller", "service", "repository", "model"})
@EntityScan(basePackages = {"com.ecoera", "model", "com.ecoera.model"})
@EnableJpaRepositories(basePackages = {"com.ecoera", "repository", "com.ecoera.repository"})
public class EcoeraApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcoeraApplication.class, args);
	}

}
