export function commonChars(words: string[]): string[] {
    const wantedWord = words[0]?.split("")

    words.slice(1).map((el)=> {
        for(let i = 0; i< wantedWord.length; i++){
            if(el.includes(wantedWord[i])){
               el = el.replace(wantedWord[i],'')
            }else {
                wantedWord.splice(wantedWord.indexOf(wantedWord[i]),1)
            }

        }
    })

    return wantedWord
};