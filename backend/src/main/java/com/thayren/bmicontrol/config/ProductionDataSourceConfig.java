package com.thayren.bmicontrol.config;

import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@Profile("prod")
public class ProductionDataSourceConfig {

    @Bean
    public HikariDataSource dataSource(@Value("${DATABASE_URL}") String databaseUrl) {
        URI uri = URI.create(databaseUrl);
        String[] credentials = uri.getRawUserInfo().split(":", 2);
        HikariDataSource source = new HikariDataSource();
        source.setJdbcUrl("jdbc:postgresql://" + uri.getHost() + ":"
                + (uri.getPort() < 0 ? 5432 : uri.getPort()) + uri.getPath()
                + "?sslmode=require&currentSchema=bmicontrol");
        source.setUsername(URLDecoder.decode(credentials[0], StandardCharsets.UTF_8));
        source.setPassword(URLDecoder.decode(credentials[1], StandardCharsets.UTF_8));
        source.setMaximumPoolSize(3);
        source.setMinimumIdle(0);
        return source;
    }
}
