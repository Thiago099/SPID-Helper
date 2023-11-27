<script>
  let input = ""
  let output = ""
  let name = ""
  let error = false

  let isMod = true

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
      let modName = name.trim()
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
        
        isMod = mod

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

        if(mod && modName == "")
        {
          error = true;
          output = "Mod name required for non base game files"
        }
        else
        {
          let i = 0;
          while(result[i] == "0")
          {
            i++;
          }

          output = "0x"+result.substring(i, result.length) + (mod?("~"+name):"")
        }
      }
    }
  }
</script>

<main>
  <label for="input">FormID</label>
  <input id="input" type="text" bind:value={input} placeholder="FE044801"/>
  <label for="pluginName">Plugin File (only if it is not from the base game)</label>
  <input id="pluginName" type="text" class="{isMod?"":"base-game"}" bind:value={name} placeholder="My Plugin.esl"/>
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
input.base-game{
  opacity: 0.2;
}
::placeholder {

  opacity: 0.2; /* Firefox */
}

::-ms-input-placeholder { /* Edge 12 -18 */
  opacity: 0.2;
}
</style>
