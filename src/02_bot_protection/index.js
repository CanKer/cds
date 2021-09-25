// One gaming company found out that they are losing money because some players are using scripts that are playing the
// game for players while they are sleeping.
//
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them, they
// discovered those scripts are using the same sequence of commands all the time.
//
// Your task is to use cleaned up access logs to discover bots. Cleaned up access log of one player would look like an
// space separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least
// 2 times from the cleaned up access log.
//
// For example, we have following access log:
//
// left right fire jump fire back forward forward jump fire back left left right
//
// we can see that the sequence "jump fire back" is repeated two times.

exports.botProtection = function(data) {
    //TODO implement me
    console.time("for")
    const t1 = performance.now()
    for(let i = 0; i < data.length - 3; i++) {
      let initCommands = data.slice(i, i+3).join("")
      for(let j = 3; j < data.length - 3; j++) {
      const actCommands = data.slice(j, j+3).join("")
        if(actCommands == initCommands) {
          const t2 = performance.now()
          console.log("final: ", t2 - t1)
          console.timeEnd("for")
          return true}
      }
    }
    console.timeEnd("for")
    return false
    // console.time("doWhile")
    // const t1 = performance.now()
    // let isBot = false
    // let index = 0
    // let indexCompare = index + 3
    // do {
    //   const initCommands = data.slice(index, index+3).join("")
    //   const actCommands = data.slice(indexCompare, indexCompare+3).join("")
    //   if(initCommands == actCommands) isBot = !isBot
    //   if(indexCompare < data.length -3) indexCompare++
    //   else {
    //     index++
    //     indexCompare = (index+3)
    //   }
    // } while (index < data.length - 3 || !isBot);
    // const t2 = performance.now()
    // console.log("final: ", t2-t1)
    // console.timeEnd("doWhile")
    // return isBot
}
