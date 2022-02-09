package com.team4.ecommerce.project.Cors;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// This probably is not needed but I haven't tested removing it
@Configuration
public class CorsConfiguration{    
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {           
			@Override            
			public void addCorsMappings(CorsRegistry registry) {                
					registry.addMapping("/**").allowedOrigins("http://localhost:4200");            
				}
			};
		}
	}
