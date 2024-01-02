package com.ckdev.guitarshop_api.services.Impl;

import com.ckdev.guitarshop_api.controllers.Types.AuthenticationRequest;
import com.ckdev.guitarshop_api.controllers.Types.AuthenticationResponse;
import com.ckdev.guitarshop_api.controllers.Types.RegisterRequest;
import com.ckdev.guitarshop_api.models.Entities.AppUserEntity;
import com.ckdev.guitarshop_api.repositories.AppUserRepo;
import com.ckdev.guitarshop_api.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AppUserRepo appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTServiceImpl jwtService;
    private final AuthenticationManager authManager;

    @Override
    public AuthenticationResponse register(RegisterRequest request) {

        var isUserExist = appUserRepository.findByEmail(request.getEmail());

        if(!isUserExist.isEmpty()){
            return AuthenticationResponse.builder()
                    .accessToken(null)
                    .isSuccess(false)
//                .refreshToken(refreshToken)
                    .build();
        }

        var user = AppUserEntity.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        var savedUser = appUserRepository.save(user);
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
        var user = appUserRepository.findByEmail(request.getEmail())
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
