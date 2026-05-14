package com.backendforge.backend.dto.response;

public record AuthResponseDto(
        String token,

        String type,

        UserResponseDto user
) {}
