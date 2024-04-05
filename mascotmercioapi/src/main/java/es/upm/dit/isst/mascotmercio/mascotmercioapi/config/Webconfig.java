package es.upm.dit.isst.mascotmercio.mascotmercioapi.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Webconfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // Permitir solicitudes desde el origen del frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE"); // Permitir los métodos HTTP necesarios
    }
}