<?php
// require_once(dirname(__FILE__) . "/../inc/config.php");

namespace Model;


class Database {
    // properties
    public $db = null;
    public $results = null;

    private $server = "LOCALHOST";
    private $username = "root";
    private $password = "";
    private $database = "scandiweb";

    public function __construct()
    {
        try{
            $this->db = new \mysqli($this->server, $this->username, $this->password, $this->database);
            if(mysqli_connect_errno()) {
                throw new \Exception("Could not connect to database");
            }
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    public function runQuery($sqlQuery) {
        if($this->db == null) {
            return false;
        }

        $this->results = $this->db->query($sqlQuery);
        if ($this->results == false) {
            return false;
        } else {
            return true;
        }
    }

    public function dbFetchAll() {
        if($this->results == null) {
            return false;
        } elseif ($this->results == false) {
            return false;
        }

        return $this->results->fetch_all(MYSQLI_ASSOC);
    }

    // public function connect() {
    //     $this->db = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);

    //     // test the connection
    //     if($this->db->connect_error) {
    //         return false;
    //     }else {
    //         return true;
    //     }
    // }
}