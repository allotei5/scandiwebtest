<?php

namespace Model;

use Model\Database;

class Product extends Database {

    private $id;
    private $sku;
    private $name;
    private $price;
    private $attribute;

    public function setId($id) {
        $this->id = $id;
    }

    public function getId() {
        return $this->id;
    }

    public function setSku($sku) {

        $this->sku = $this->db->real_escape_string($sku);
    }

    public function getSku() {
        return $this->sku;
    }

    public function setName($name) {
        $this->name = $this->db->real_escape_string($name);
    }

    public function getName() {
        return $this->name;
    }

    public function setPrice($price) {
        $this->price = $this->db->real_escape_string($price);
    }

    public function getPrice() {
        return $this->price;
    }

    public function setAttribute($attribute) {
        $this->attribute = $this->db->real_escape_string($attribute);
    }

    public function getAttribute() {
        return $this->attribute;
    }

    public function getAllProducts() {
        $sql = "SELECT * FROM `products`";
        $query = $this->runQuery($sql);
        $products_from_db = $this->dbFetchAll();

        $products_to_return = [];
        foreach($products_from_db as $row) {
            $this->setId($row["id"]);
            $this->setSku($row["sku"]);
            $this->setName($row["name"]);
            $this->setPrice($row["price"]);
            $this->setAttribute($row["attribute"]);

            array_push($products_to_return, [
                "id" => $this->getId(),
                "sku" => $this->getSku(),
                "name" => $this->getName(),
                "price" => $this->getPrice(),
                "attribute" => $this->getAttribute()
            ]);

        }

        return $products_to_return;
    }

    public function massDeleteProducts($products) {
        $sql = "DELETE FROM `products` WHERE `id` IN ('$products')";
        return $this->runQuery($sql);
        // return $sql;
    }

    public function checkUniqueSku($sku) {
        $this->setSku($sku);
        $sql = "SELECT `sku` FROM `products` WHERE `sku`='".$this->getSku()."'";
        $run = $this->runQuery($sql);
        $sku = $this->dbFetchAll();
        if(empty($sku)) {
            return true;
        }else {
            return false;
        }
    }

    public function addProduct($sku, $name, $price, $attribute) {

        $this->setSku($sku);
        $this->setName($name);
        $this->setPrice($price);
        $this->setAttribute($attribute);

        $sql = "INSERT INTO `products`(`sku`, `name`, `price`, `attribute`) VALUES ('".$this->getSku()."', '". $this->getName()."', '".$this->getPrice() ."', '". $this->getAttribute() . "')";
        return $this->runQuery($sql);

    }
}