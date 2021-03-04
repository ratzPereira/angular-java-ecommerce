package com.ratz.ecommerce.service;

import com.ratz.ecommerce.dto.Purchase;
import com.ratz.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
