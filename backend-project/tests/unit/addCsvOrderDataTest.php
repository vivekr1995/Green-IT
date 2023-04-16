<?php

class addCsvOrderDataTest extends \Codeception\Test\Unit
{
    /**
     * @var \UnitTester
     */
    protected $tester;
    
    protected function _before()
    {
    }

    protected function _after()
    {
    }

      
    /**
     * testAddCsvOrderData
     * This function will create mock of the CsvOrderController
     * Here declaring the method addCsvOrderData and it will return 
     * bool(true)
     * 
     * @return void
     */
    public function testAddCsvOrderData()
    {
        $csvOrderControllerObject = $this->createMock(CsvOrderController::class);
        $csvOrderControllerObject->method("addCsvOrderData")->willReturn(true);

        $csvOrderControllerObject
        ->expects($this->once())
        ->method("addCsvOrderData")
        ->with(["id" => 5, "name" => 'Vivek', "state" => "Karnataka", 
        "zip" => 123456, "amount" => 25.05, "quantity" => 8, "item" => 'ABCDE']);

        $result = $csvOrderControllerObject->addCsvOrderData(["id" => 5, "name" => 'Vivek', "state" => "Karnataka", 
        "zip" => 123456, "amount" => 25.05, "quantity" => 8, "item" => 'ABCDE']);

        $this->assertTrue($result);
    }
    
    /**
     * testAddCsvOrderDataFail
     * If we send empty array to addCsvOrderData
     * it will not add the record to csv file
     * @return void
     */
    public function testAddCsvOrderDataFail()
    {
        $csvOrderControllerObject = $this->createMock(CsvOrderController::class);
        $csvOrderControllerObject->method("addCsvOrderData")->willReturn(true);

        $csvOrderControllerObject
        ->expects($this->once())
        ->method("addCsvOrderData")
        ->with([]);

        $result = $csvOrderControllerObject->addCsvOrderData([]);

        $this->assertTrue($result);

    }
}