package kr.co.ai_project;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// 스프링 실행 시점에 스프링 컨테이너가 관리할 빈(Bean) 객체들을
// 자바 기반 설정으로 등록 및 설정하는 클래스임을 정의
@Configuration
public class SecurityConfig {

   @Bean // 빈(객체)로 관리하겠다.
   public SecurityFilterChain filterChain(HttpSecurity http) throws Exception  {
      http.csrf(csrf -> csrf.disable()) // CSRF 비활성화
              .cors(Customizer.withDefaults())
              .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()); // 모든 요청 허용
      
      return http.build();
   }
   
   // 패스워드 암호화 빈(Bean)
   @Bean
   public BCryptPasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
   }
   
   // import : org.springframework.web.cors.CorsConfigurationSource
   // import : org.springframework.web.cors.UrlBasedCorsConfigurationSource
   // import : java.util.List
   @Bean
   public CorsConfigurationSource corsConfigurationSource() {
      CorsConfiguration config = new CorsConfiguration();
      
      
      config.setAllowedOrigins(List.of("http://localhost:5173"));
      config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE"));
      config.setAllowedHeaders(List.of("*"));
      config.setAllowCredentials(true); // 세션, 쿠키 전달 허용
      
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      source.registerCorsConfiguration("/**", config); // 전체 경로 적용
      return source;
   }
} 
 

 












