package com.ckdev.guitarshop_api.services;

import com.ckdev.guitarshop_api.controllers.Types.AuthenticationRequest;
import com.ckdev.guitarshop_api.controllers.Types.AuthenticationResponse;
import com.ckdev.guitarshop_api.controllers.Types.RegisterRequest;
import com.ckdev.guitarshop_api.models.Entities.UserEntity;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {

    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

//    void saveUserToken(UserEntity user, String jwtToken);
//
//    void revokeAllUserTokens(UserEntity user);
//
//    void refreshToken(HttpServletRequest request, HttpServletResponse response);


}
