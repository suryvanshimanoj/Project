// create cal function

function cal() {
    // get value of all inputs
    var num = document.getElementById("one").value;
    var num2 = (document.getElementById("res1").innerHTML = num2 = 500 * num);
  
    var num = document.getElementById("two").value;
    var num2 = (document.getElementById("res2").innerHTML = num2 = 200 * num);
  
    var num = document.getElementById("three").value;
    var num2 = (document.getElementById("res3").innerHTML = num2 = 100 * num);
  
    var num = document.getElementById("four").value;
    var num2 = (document.getElementById("res4").innerHTML = num2 = 50 * num);
  
    var num = document.getElementById("five").value;
    var num2 = (document.getElementById("res5").innerHTML = num2 = 20 * num);
  
    var num = document.getElementById("six").value;
    var num2 = (document.getElementById("res6").innerHTML = num2 = 10 * num);
  
    //   get totals of money
    var total =
      +document.getElementById("res1").innerHTML +
      +document.getElementById("res2").innerHTML +
      +document.getElementById("res3").innerHTML +
      +document.getElementById("res4").innerHTML +
      +document.getElementById("res5").innerHTML +
      +document.getElementById("res6").innerHTML;
  
    document.getElementById("total").innerHTML = total;
  
    //   get totals of notes
  
    var totalNotes = 0;
    var noteInputs = ["one","two", "three", "four", "five", "six"];
  
    for (let i = 0; i < noteInputs.length; i++) {
  
      var inputValue = +document.getElementById(noteInputs[i]).value;
  
      (inputValue !== 0) ? totalNotes += inputValue : 0;
        
      
    }
  
    document.getElementById("totalNotes").innerHTML = totalNotes;
    
      // conver number to words
    
    var words = convertToWords(total);
    document.getElementById("words").innerHTML = words;
    
   // Function to convert number to words
    function convertToWords(number) {
     
      var units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      var teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  
      function convertChunk(num) {
        var words = '';
  
        if (num >= 100) {
            words += units[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }
  
        if (num >= 11 && num <= 19) {
            words += teens[num - 11] + ' ';
  
        } else if (num >= 20 || num === 10) {
            words += tens[Math.floor(num / 10)] + ' ';
            num %= 10;
        }
  
        if (num >= 1 && num <= 9) {
            words += units[num] + ' ';
        }
  
        return words;
    }
  
    if (number === 0) {
        return 'Zero';
    }
  
    var words = '';
    var million = Math.floor(number / 1000000);
    var thousand = Math.floor((number % 1000000) / 1000);
    var remainder = number % 1000;
  
    if (million > 0) {
        words += convertChunk(million) + 'Million ';
    }
  
    if (thousand > 0) {
        words += convertChunk(thousand) + 'Thousand ';
    }
  
    if (remainder > 0) {
        words += convertChunk(remainder);
    }
  
    return words.trim();
  
      return "Not Implemented"; // Placeholder
  }
  
  
  }