<script>
  let input = ""
  let output = ""
  let error = false

  function clean(input)
  {
    return input.replace(/[^a-zA-Z0-9]+/g,"").toUpperCase().trim()
  }
  
  let masters = ["00", "01", "02", "03", "04",]
  $:{
    output = ""
    error = true
    if(input != "")
    {
      let result = clean(input)
      if(result.length != 8)
      {
        output += "input must be 8 characters long"
      }

      if(output == "")
      {
        error = false



        let firstTwoDigits = result.slice(0,2)

        let esl = false
        let mod = true

        if(firstTwoDigits == "FE")
        {
          esl = true;
        }
        else if(masters.includes(firstTwoDigits))
        {
          mod = false;
        }

        if(mod)
        {
          if(esl)
          {
            result = result.substring(5, result.length)
          }
          else
          {
            result = result.substring(2, result.length)
          }
        }

        let i = 0;
        while(result[i] == "0")
        {
          i++;
        }

        output = "0x"+result.substring(i, result.length)
      }
    }
  }
</script>

<main>
  <label for="input">FormID</label>
  <input id="input" type="text" bind:value={input}/>
  <label for="result" style="color: #181;">SPID - DISTR ID</label>
  <input id="result" type="text" bind:value={output} style="{error?"color:red":""}"/>
</main>

<style>

main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
main > *{
  margin: 5px;
}
input{
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1.5em;
  width: 400px;
  text-align: center;
}
</style>
