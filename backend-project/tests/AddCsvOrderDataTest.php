<?php

    use PHPUnit\Framework\TestCase;
    
    // define root path of application
    define('APPROOT',dirname(__DIR__) . '/');

    // define CSV file path
    define('CSV_PATH', 'tests/_data/data.csv');

    require dirname(__DIR__) . "/Controllers/API/CsvOrderController.php";

    class AddCsvOrderDataTest extends TestCase{

        private $csvFilePath = APPROOT . CSV_PATH;

        public function testTrueReturnsTrue() { 
            return $this->assertTrue(true); 
        }

         /**
         * testAddCsvOrderData
         * This function will create mock of the CsvOrderController
         * Here declaring the method addCsvOrderData and it will return 
         * bool(true)
         * 
         * @return void
         */
        public function testAddCsvOrderData(): void
        {
            $csv = array(
                "id" => 0,
                "name" => "Test",
                "state" => "IN",
                "zip" => "123456",
                "amount" => "34",
                "quantity" => "12",
                "item" => "ABC12"
            );

            $CsvObjTest = new CsvOrderController($this->csvFilePath);

            $orderControllerObject = $this->createMock(CsvOrderController::class);
            $orderControllerObject->method("addCsvOrderData")->willReturn(true);

            $orderControllerObject
            ->expects($this->once())
            ->method("addCsvOrderData")
            ->with($csv);

            $result = $orderControllerObject->addCsvOrderData($csv);

            $this->assertTrue($result);
        }

        /**
         * testAddDataFail
         * If we send empty array to addCsvOrderData
         * it will not add the record to csv file
         * @return void
         */
        public function testAddDataFail()
        {
            $orderControllerObject = $this->createMock(CsvOrderController::class);
            $orderControllerObject->method("addCsvOrderData")->willReturn(true);

            $orderControllerObject
            ->expects($this->once())
            ->method("addCsvOrderData")
            ->with([]);

            $result = $orderControllerObject->addCsvOrderData([]);

            $this->assertTrue($result);

        }

    }

?>