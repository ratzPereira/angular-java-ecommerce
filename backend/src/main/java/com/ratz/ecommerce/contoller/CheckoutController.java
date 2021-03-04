package com.ratz.ecommerce.contoller;


import com.ratz.ecommerce.dto.Purchase;
import com.ratz.ecommerce.dto.PurchaseResponse;
import com.ratz.ecommerce.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        System.out.println("this is the purchase " + purchase);
        System.out.println("this is the purchaseResponse " + purchaseResponse);
        return purchaseResponse;
    }

}