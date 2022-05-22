<?php
require_once(dirname(__FILE__)."/./vendor/autoload.php");

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

use Controllers\ProductController;

$requestType = $_SERVER['REQUEST_METHOD'];

$product = new ProductController;

if($requestType == "GET") {
    echo json_encode($product->getProducts());
}

if($requestType == "DELETE") {

    $form_data=json_decode(file_get_contents("php://input"));
    foreach($form_data->products as $deleteProduct) {
        $delete = $product->deleteProducts($deleteProduct);
    }

    if($delete == true) {
        echo json_encode([
            "response" => true
        ]);
    } else {
        echo json_encode([
            "response" => false
        ]);
    }

}

if($requestType == "POST") {

    $form_data = json_decode(file_get_contents("php://input"));
    
    $product->setType($form_data->type);

    $add = $product->addNewProduct($form_data->sku, $form_data->name, $form_data->price, $form_data->attribute);

    if($add["response"] == true) {
        echo json_encode($add);
    }else if ($add["response"] == false) {
        echo json_encode($add);
    }

}