<?php

namespace Controllers;

use Model\Product;

class ProductController extends Product {
    public function getProducts() {
        // run query
        return $this->getAllProducts();
    }

    public function deleteProducts($products) {
        $query = $this->massDeleteproducts($products);
        if ($query) {
            return $query;
        } else {
            return false;
        }
    }

    public function addNewProduct($sku, $name, $price, $attribute) {
        $checkUniqueSku = $this->checkUniqueSku($sku);

        if(!$checkUniqueSku) {
            return [
                "response" => false,
                "responseMessage" => 1
            ];
        }else {
            $query = $this->addProduct($sku, $name, $price, $attribute);
            if($query) {
                return [
                    "response" => true,
                    "responseMessage" => "Product Added"
                ];
            }else {
                return [
                    "response" => false,
                    "responseMessage" => "Product did not add"
                ];
            }
        }

        
    }
}