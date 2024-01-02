package com.ckdev.guitarshop_api.services.Impl;

import com.ckdev.guitarshop_api.controllers.Types.AuthenticationRequest;
import com.ckdev.guitarshop_api.controllers.Types.AuthenticationResponse;
import com.ckdev.guitarshop_api.controllers.Types.RegisterRequest;
import com.ckdev.guitarshop_api.models.Entities.UserEntity;
import com.ckdev.guitarshop_api.repositories.UserRepo;
import com.ckdev.guitarshop_api.services.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTServiceImpl jwtService;
    private final AuthenticationManager authManager;

    @Override
    public AuthenticationResponse register(RegisterRequest request) {

        var isUserExist = userRepository.findByEmail(request.getEmail());

        if(!isUserExist.isEmpty()){
            return AuthenticationResponse.builder()
                    .accessToken(null)
                    .isSuccess(false)
//                .refreshToken(refreshToken)
                    .build();
        }

        var user = UserEntity.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

//        var refreshToken = jwtService.generateRefreshToken(user);
//        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .isSuccess(true)
                .userName(savedUser.getFirstname())
//                .refreshToken(refreshToken)
                .build();
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
//        var refreshToken = jwtService.generateRefreshToken(user);

//        revokeAllUserTokens(user);
//        saveUserToken(user, jwtToken);

        return AuthenticationResponse.builder()
                .isSuccess(true)
                .accessToken(jwtToken)
                .userName(user.getFirstname())
//                .refreshToken(refreshToken)
                .build();
    }

//    @Override
//    public void saveUserToken(UserEntity user, String jwtToken) {
//
//    }

//    @Override
//    public void revokeAllUserTokens(UserEntity user) {
//
//    }

//    @Override
//    public void refreshToken(HttpServletRequest request, HttpServletResponse response) {
//
//    }
}
