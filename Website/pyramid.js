function generatePyramid(rows) {
    let pyramidText = '';
    
    for (let i = 1; i <= rows; i++) {
      // Add spaces for alignment
      let spaces = ' '.repeat(rows - i);
      // Add asterisks for each row
      let stars = '*'.repeat(2 * i - 1);
      pyramidText += spaces + stars + '\n';
    }
 
    // Display the pyramid inside the 'pyramid' div
    document.getElementById('pyramid').textContent = pyramidText;
  }

  console.log(pyramidText);