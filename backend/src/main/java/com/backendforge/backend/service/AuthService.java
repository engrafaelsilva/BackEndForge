package com.backendforge.backend.service;

import com.backendforge.backend.dto.request.LoginRequestDto;
import com.backendforge.backend.dto.request.RegisterRequestDto;
import com.backendforge.backend.dto.response.AuthResponseDto;
import com.backendforge.backend.dto.response.UserResponseDto;
import com.backendforge.backend.entity.User;
import com.backendforge.backend.enums.AuthProvider;
import com.backendforge.backend.enums.Role;
import com.backendforge.backend.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public void register(RegisterRequestDto registerRequestDto){

        if(userRepository.existsByEmail(registerRequestDto.email())){
            throw new RuntimeException("E-mail já cadastrado.");
        }

        User user = User.builder()
                .name(registerRequestDto.name())
                .email(registerRequestDto.email())
                .password(passwordEncoder.encode(registerRequestDto.password()))
                .role(Role.USER)
                .provider(AuthProvider.LOCAL)
                .build();

        userRepository.save(user);
    }

    public AuthResponseDto login(LoginRequestDto loginRequestDto){

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequestDto.email(),
                        loginRequestDto.password()
                )
        );

        User user = userRepository.findByEmail(loginRequestDto.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponseDto(
                token,
                "Bearer",
                new UserResponseDto(
                        user.getId(),
                        user.getName(),
                        user.getEmail()
                )
        );
    }
}
