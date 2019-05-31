describe("Calculator", function() {
    let calculator;
    beforeEach(function(){
      calculator = new Calculator();
    });  

  //Addition
  it("should add two numbers", function() {          
      expect(calculator.add(2,2)).toBe(4);
    }); 
    
    it("should add an array of numbers", function(){      
      expect(calculator.add(5,5,5)).toBe(15);
    });

    it("should convert and add strings to numbers", function(){    
      expect(calculator.add("2",5,5)).toBe(12);
    });

    it("should add float numbers", function(){      
      expect(calculator.add(1.2, 3.5)).toBe(4.7);
     });

     
      //Multiplication
      it("should multiply two numbers", function() {        
        expect(calculator.multiply(2,2)).toBe(4);
      }); 
      
      it("should multiply an array of numbers", function(){  
        expect(calculator.multiply(5,5,5)).toBe(125);
      });
  
      it("should convert and multiply strings to numbers", function(){
        expect(calculator.multiply("2",5,5)).toBe(50);
      });
  
      it("should multiply float numbers", function(){        
        expect(calculator.multiply(1.2, 3.5)).toBe(4.2);
       });
    
      });
    
    

      describe("Last", function(){
        it("should add or multiply the last value", function(){    
          expect(calculator.add(2, 5)).toBe(7);
        expect(calculator.multiply(calculator.last(), 5)).toBe(35);
        })
      })



      describe("Memory Slots", function(){
        it("should get and set the value, store it into a memory slot and allow memory slots as parameters", function(){
            expect(calculator.add(21, 8)).toBe(29)
            expect(calculator.set_slot(1))
            expect(calculator.get_slot(1))
            expect(calculator.add(calculator.get_slot(1), 5));//slot as perimeter

            expect(calculator.add(18, 6)).toBe(24)
            expect(calculator.set_slot(2))
            expect(calculator.get_slot(2))
            expect(calculator.multiply(calculator.get_slot(2), 5));//slot as perimeter 

            expect(calculator.add(25,99)).toBe(124) 
            expect(calculator.get_slot(1)) 
            expect(calculator.get_slot(2)) 
            expect(calculator.last())

            
        
        })
      })

      

      
    
  
  