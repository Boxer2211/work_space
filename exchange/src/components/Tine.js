


      const date = new Date()
      let Year = date.getFullYear();
      let Month = Number(date.getMonth()) + 1;
      let Day = date.getDate();
      if (Month <= 9) {
          Month = "0"+ Month  
      }

      let Chas = "0" + Day + "." + Month + "." + Year
      
      export default Chas 
  
  
