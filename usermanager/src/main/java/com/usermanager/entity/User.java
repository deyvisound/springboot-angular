package com.usermanager.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "users")
public class User {
	
	User() {
		this.name = "";
		this.email = "";
		this.password = "";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(nullable = false)
	@NotBlank(message = "O Atributo Nome é Obrigatório")
	private final String name;

	@Column(nullable = false, unique = true)
	@NotBlank(message = "O Atributo Email é Obrigatório")
	@Email(message = "Deve ser informado um email válido")
	private final String email;

	@Column(nullable = false)
	@NotBlank(message = "O Atributo Senha é Obrigatória")		
	private final String password;

	@Transient	
	private String passwordConfirm;
}
