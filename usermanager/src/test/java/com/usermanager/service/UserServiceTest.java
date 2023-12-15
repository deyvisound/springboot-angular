package com.usermanager.service;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.usermanager.entity.User;


@SpringBootTest
@AutoConfigureMockMvc
class UserServiceTest {

	@Autowired
	public MockMvc mockMvc;
	
	@Test
    void deveSalvarUmaPessoaChamadaJoao() {
        assertDoesNotThrow(() -> {

            ObjectMapper objectMapper = new ObjectMapper();
            String name = "Deyvison";
            String email = "deyvison@email.com";
            String password = "$2a$12$520njpOYK4BglI1OCdCmrOp./nx/D10xhGbBrvlzG0RLug1VkyME2";

            User user = new User( name, email, password);
            String userJson = objectMapper.writeValueAsString(user);

            mockMvc.perform(
                    post("/users")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(userJson)
                            .accept(MediaType.APPLICATION_JSON)
            )
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("name", is(name)))
                    .andExpect(jsonPath("email", is(email)))
                    .andExpect(jsonPath("password", is(password)));

        });
        
    }

}
