package com.ckdev.guitarshop_api.controllers.Types;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    @JsonProperty("access_token")
    private String accessToken;
    
    private boolean isSuccess;

    private String userName;

    private Integer userID;

//    @JsonProperty("refresh_token")
//    private String refreshToken;
}
