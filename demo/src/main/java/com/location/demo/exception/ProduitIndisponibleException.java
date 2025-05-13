package com.location.demo.exception;

public class ProduitIndisponibleException extends RuntimeException {
    public ProduitIndisponibleException(String message) {
        super(message);
    }
}
