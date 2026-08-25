test.describe('File Download code',() =>(
    test.beforeEach(async({page}) => {
});

test("Verify the download button is working fine",async({page}) => {
    const[staticDownload]= await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('download-static').click()
    ])
    const filePath= path.join('out',staticDownload.suggestedFilename());
    await staticDownload.saveas(filePath); 
});

