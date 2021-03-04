package com.ratz.ecommerce.dto;



//we will use this class to send Java object as JSON
public class PurchaseResponse {

    private final String orderTrackingNumber;

    public PurchaseResponse(String orderTrackingNumber) {
        this.orderTrackingNumber = orderTrackingNumber;
    }

    public String getOrderTrackingNumber() {
        return orderTrackingNumber;
    }
}
