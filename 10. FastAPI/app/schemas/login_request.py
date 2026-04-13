from pydantic import BaseModel, field_validator


class LoginRequest(BaseModel):
    username: str
    password: str

    @field_validator("password")
    def validate_password(cls, value :str):
        if len(value) < 8:
            raise ValueError("8자 이상이어야 함.")
        return value