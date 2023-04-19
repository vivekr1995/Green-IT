<?php

    use PHPUnit\Framework\TestCase;
    
    // define root path of application
    define('APPROOT',dirname(__DIR__) . '/');

    // define CSV file path
    define('CSV_PATH', 'tests/_data/data.csv');

    require dirname(__DIR__) . "/Controllers/API/CsvOrderController.php";

    class EditCsvOrderDataTest extends TestCase{

        private $csvFilePath = APPROOT . CSV_PATH;

        public function testTrueReturnsTrue() { 
            return $this->assertTrue(true); 
        }

        /**
         * testEditCsvOrderData
         * editCsvOrderData takes array as a parameter
         * with fields mentioned as following
         * @return void
         */
        public function testEditCsvOrderData(): void
        {
            $csv = array(
                "id" => 5,
                "name" => "Test",
                "state" => "IN",
                "zip" => "123456",
                "amount" => "34",
                "quantity" => "12",
                "item" => "ABC12"
            );

            $orderControllerObject = $this->createMock(CsvOrderController::class);
            $orderControllerObject->method("editCsvOrderData")->willReturn(true);

            $orderControllerObject
            ->expects($this->once())
            ->method("editCsvOrderData")
            ->with($csv);

            $result = $orderControllerObject->editCsvOrderData($csv);

            $this->assertTrue($result);
        }

        /**
         * testEditDataFail
         * If Id is not passed in array to editCsvOrderData
         * it will not update into the csv file
         * @return void
         */
        public function testEditDataFail()
        {
            $csv = array(
                "name" => "Test",
                "state" => "IN",
                "zip" => "123456",
                "amount" => "34",
                "quantity" => "12",
                "item" => "ABC12"
            );

            $orderControllerObject = $this->createMock(CsvOrderController::class);

            $orderControllerObject
            ->expects($this->once())
            ->method("editCsvOrderData")
            ->with($csv)
            ->will($this->returnValue(false));


            $result = $orderControllerObject->editCsvOrderData($csv);

            $this->assertFalse($result);
        }

    }

?>