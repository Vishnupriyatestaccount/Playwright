class genericTC{
    execute(){
        console.log("Generic tc");
            }
}

            class APItestcase extends genericTC{
                execute()
                {
                    console.log("api testcase");
                }
            }

             class UItestcase extends genericTC{
                execute()
                {
                    console.log("ui testcase");
                }
            }

let testcase= [new APItestcase(), new UItestcase()];


testcase.forEach(function (test)
{
    test.execute;
});