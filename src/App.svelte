<script>
  let input = ""
  let modname = ""
  let output = ""
  let esl = false
  let mod = true
  let error = false

  function clean(input)
  {
    return input.replace(/[^a-zA-Z0-9]+/g,"")
  }
  
  let masters = ["Skyrim.esm", "Update.esm", "Dawnguard.esm", "Dragonborn.esm", "HearthFires.esm"]
  $:{
    output = ""
    error = true
    if(input != "")
    {
      input = clean(input).trim()
      modname = modname.trim()
      if(input.length != 8)
      {
        output += "input must have 8 characters " + input.length + "found"
      }

      if(output == "")
      {
        error = false

        let result = input

        if(masters.includes(modname))
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

        output = "0x"+result.substring(i, result.length) + (mod ? ( "~" + modname) : "")
      }
    }
  }
</script>

<main>
  <label for="input">FormID</label>
  <input id="input" type="text" bind:value={input}/>
  <label for="modName">Plugin that contains the form</label>
  <input id="modName" type="text" bind:value={modname}/>
    <div><input id="mod" type="checkbox" bind:checked={mod}/><label for="mod">is the plugin from mod (opcional)</label></div>
  <div><input id="esl" type="checkbox" bind:checked={esl}/><label for="esl">is the plugin ESL</label></div>
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
}
</style>
