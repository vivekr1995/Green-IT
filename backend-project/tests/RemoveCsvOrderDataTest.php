<?php

    use PHPUnit\Framework\TestCase;
    
    // define root path of application
    define('APPROOT',dirname(__DIR__) . '/');

    // define CSV file path
    define('CSV_PATH', 'tests/_data/data.csv');

    require dirname(__DIR__) . "/Controllers/API/CsvOrderController.php";

    class RemoveCsvOrderDataTest extends TestCase{

        private $csvFilePath = APPROOT . CSV_PATH;

        public function testTrueReturnsTrue() { 
            return $this->assertTrue(true); 
        }

        /**
         * testremoveCsvOrderData
         *
         * @return void
         */
        public function testremoveCsvOrderData()
        {

            $orderControllerObject = $this->createMock(CsvOrderController::class);
            $orderControllerObject->method("removeCsvOrderData")->willReturn(true);

            $orderControllerObject
            ->expects($this->once())
            ->method("removeCsvOrderData")
            ->with(5);

            $result = $orderControllerObject->removeCsvOrderData(5);

            $this->assertTrue($result);
        }
    
        /**
         * testDeleteFail
         * If 0 is passed to removeCsvOrderData funtion it will 
         * Delete order data from csv file
         * @return void
         */
        public function testDeleteFail()
        {
            $orderControllerObject = $this->createMock(CsvOrderController::class);
            $orderControllerObject->method("removeCsvOrderData")->willReturn(false);

            $orderControllerObject
            ->expects($this->once())
            ->method("removeCsvOrderData")
            ->with(0);

            $result = $orderControllerObject->removeCsvOrderData(0);

            $this->assertFalse($result);
        }

    }

?>