package com.vkakarla.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;


@OpenAPIDefinition(info = @Info(title = "Employee Management Service",
                                version = "0.0.1-SNAPSHOT",
                                termsOfService = "Terms and conditions of this product",
                                contact =@Contact(name="https://www.youtube.com/c/vkakarla", email = "vkakarla@gmail.com"),
                                license = @License(name = "licence of this projet")))
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
