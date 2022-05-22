<?php
namespace Model;

use Model\Product;

class Furniture extends Product {

    public function addProduct($sku, $name, $price, $attribute) {
        $this->setSku($sku);
        $this->setName($name);
        $this->setPrice($price);
        $newAttribute = "Dimension: " . $attribute->height . "x" . $attribute->width . "x" . $attribute->length;
        $this->setAttribute($newAttribute);

        $sql = "INSERT INTO `products`(`sku`, `name`, `price`, `attribute`) VALUES ('".$this->getSku()."', '". $this->getName()."', '".$this->getPrice() ."', '". $this->getAttribute() . "')";
        return $this->runQuery($sql);
    }
    
}

