<?php 
    
    use PHPUnit\Framework\TestCase;
    
    // define root path of application
    define('APPROOT',dirname(__DIR__) . '/');

    // define CSV file path
    define('CSV_PATH', 'tests/_data/data.csv');

    require dirname(__DIR__) . "/Controllers/API/CsvOrderController.php";

    class GetCsvOrderDataTest extends TestCase{

        private $csvFilePath = APPROOT . CSV_PATH;

        public function testTrueReturnsTrue() { 
            return $this->assertTrue(true); 
        }

        /**
         * testGetCsvOrderData
         *
         * @return void
         */
        public function testGetCsvOrderData(): void
        {
            $CsvObjTest = new CsvOrderController($this->csvFilePath);

            $sampleOutput = $CsvObjTest->getCsvOrderData();

            $this->assertIsArray($sampleOutput, "returns array on success");
            $this->assertGreaterThanOrEqual(2, count($sampleOutput)); // compare with number of array in csv file
            
        }

        /**
         * testFileReadable
         * Check the whether the given csv file is 
         * readable or not
         * @return void
         */
        public function testFileReadable(){
            $this->assertFileIsReadable($this->csvFilePath);
        }
        
        /**
         * testCsvWrite
         * Check the whether the given csv file is 
         * writable or not
         * @return void
         */
        public function testCsvWrite(): void
        {
            $this->assertFileIsWritable($this->csvFilePath);
        }

    }

?>