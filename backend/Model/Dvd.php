<?php
namespace Model;

use Model\Product;

class Dvd extends Product {

    public function addProduct($sku, $name, $price, $attribute) {
        $this->setSku($sku);
        $this->setName($name);
        $this->setPrice($price);
        $this->setAttribute("Size: " . $attribute->size . "MB");

        $sql = "INSERT INTO `products`(`sku`, `name`, `price`, `attribute`) VALUES ('".$this->getSku()."', '". $this->getName()."', '".$this->getPrice() ."', '". $this->getAttribute() . "')";
        return $this->runQuery($sql);
    }
    
}

