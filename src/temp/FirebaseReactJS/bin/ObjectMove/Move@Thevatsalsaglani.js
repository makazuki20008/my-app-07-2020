// Template database:
//full
words-meanings
    advanced_words 
    words 

//more
words-meanings 
    advanced_words 
    words 
        0
            meaning: "become less in amount or intensity"
            word: "abate"
        1
            meaning: "markedly different from an accepted form"
            word: "aberrant"
        2
            meaning: "temporary cessation or suspension"
            word: "abeyance"

// Get data from firebase:
componentDidMount() {
    const wordRef = firebase.database().ref('words');
    wordRef.on('value', (snapshot) => {
        let words = snapshot.val();
        let newState = [];
        for(let word in words) {
            newState.push({
                id: word,
                word: words[word].word,
                meaning: words[word].meaning
            });
        };
        this.setState({
            words: newState
        });
    });

    const advRef = firebase.database().ref('advanced_words');
    advRef.on('value', (snapshot) => {
        let advWords = snapshot.val();
        let newAdvState = [];
        for(let advWord in advWords) {
            newAdvState.push({
                id: advWord,
                advWord: advWords[advWord].word,
                advMeaning: advWords[advWord].meaning
            });
        }
        this.setState({
            advanced_words: newAdvState
        });
    });
};

// Data display:
render() {
    return (
        <div>
            <div>
                <div>
                    <a href="#normal">Words 1</a>
                    <a href="#adv">Words 2</a>
                </div>
                <section id="normal">
                    <div>
                        <h1>Words 1</h1>
                        {
                            this.state.words.map((word) => {
                                return(
                                    <div>
                                        <div>
                                            <div>
                                                <h3>{word.word}:</h3>
                                                <p>{word.meaning}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section id="adv">
                    <div>
                        <h1>Words 2</h1>
                        {this.state.advanced_words.map((w) => {
                            return (
                                <div>
                                    <div>
                                        <div>
                                            <h3>{w.advWord}</h3>
                                            <p>{w.advMeaning}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}