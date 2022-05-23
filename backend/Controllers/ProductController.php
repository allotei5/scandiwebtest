<?php

namespace Controllers;

use Model\Product;
use Model\Book;

class ProductController {
    protected $type;

    protected $errors = 0;

    public function getType() {
        return $this->type;
    }

    public function setType($type) {
        $this->type = $type;
    }

    public function getProducts() {
        // run query
        $product = new Book;
        return $product->getAllProducts();
    }

    public function deleteProducts($products) {
        $product = new Book;
        $query = $product->massDeleteproducts($products);
        if ($query) {
            return $query;
        } else {
            return false;
        }
    }

    public function checkAttribute($attribute) {
        
        foreach($attribute as $key => $value) {

            $check = $this->checkForInt($value);
            if($check == false) {
                $this->errors +=1;
                return false;
            }else {
                return true;
            }

        }   
    }

    public function checkForInt($param) {
        if(!is_numeric($param)) {
            $this->errors += 1;
            return false;
        } else {
            return true;
        }
    }

    public function uniqueSku($sku) {
        $product = new Book;

        $checkUniqueSku = $product->checkUniqueSku($sku);
        // return $checkUniqueSku;

        if(!$checkUniqueSku) {
            $this->errors += 1;
            return false;
        }else {
            return true;
        }
    }

    public function addNewProduct($sku, $name, $price, $attribute) {
        // validate data
        // check unique sku
        $uniqueSku = $this->uniqueSku($sku);

        if($uniqueSku == false) {
            return [
                "response" => false,
                "responseMessage" => "Sku must be unique"
            ];
        }

        // check if price is int
        $validPrice = $this->checkForInt($price);
        if(!$validPrice) {
            return [
                "response" => false,
                "responseMessage" => "Price must be an integer"
            ];
        }

        // check attribute
        $validAttribute = $this->checkAttribute($attribute);
        if(!$validAttribute) {
            return [
                "response" => false,
                "responseMessage" => "Attribute value must be an integer"
            ];
        }

        if($this->errors == 0){

            $lookupArray = [
                'Book' => 'Book',
                'Furniture' => 'Furniture',
                'DVD' => 'Dvd'
            ];

            if (!array_key_exists($this->type, $lookupArray)) {
                return [
                    "response" => false,
                    "responseMessage" => "Incorrect Product Type"
                ];
            }

            $className = "Model\\" . $lookupArray[$this->type];

            $query = ( new $className )->addProduct($sku, $name, $price, $attribute);

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