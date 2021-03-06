# Adapters

Internally, the working of Sugaroid is really complex.
![Sugaroid Adapters are interconnected](./img/sugaroid.structure.deps.svg)
The brain of sugaroid relies in the modules it uses. Sugaroid uses many modules to process statements called `Adapters` to process statements. Each statement is checked against two functions `LogicAdapter.can_process()` and `LogicAdapter.process()`. `LogicAdapter.can_process()` gives a boolean response if the statement can or cannot be processed. If the statement can be processed, `LogicAdapter.process()` is called.

As of Sugaroid `v0.7`, it has:

* `BoolAdapter`: Processes Boolean based answers
* `AkinatorAdapter`: Adapter which ports the wrapper of the Akinator game to Sugaroid
* `HangmanAdapter`: Plays hangman with you
* `OrAdapter`: Selects a random operand of the provided statement
* `OkayAdapter`: Handles statements with a plain old okay
* `ByeAdapter`: Destroys Sugaroid on bye
* `TimeAdapter`: Provides time and time related functions except time conversion
* `CurrencyAdapter`: Helps convert from one currency to another.
* `LearnAdapter`: a specific adapter for learning responses
* `TriviaAdapter`: Plays a short game of trivia
* `WhoAdapter`: Handles statements with 'who' as one of the tokens
* `NewsAdapter`: Ports the `SugaroidNews` Wrapper for easier access by the `SugaroidChatbot` Class
* `JokeAdapter`: Gets a random joke from the Chuck Norris Database
* `PlayAdapter`: `[DEPRECATED]` Plays a game on desktops only
* `CanAdapter`: Processes statements which features a Modal question \(can, may\)
* `BecauseAdapter`: Processes statements which starts with Because or gives a reason
* `ReReverseAdapter`: Processes statements featuring conversational flow. It scans the previous statements

     and takes a cosine similarity of the statements, and `TFiD` Vector cross product to get

     the most probable answer

* `ReverseAdapter:` A random adapter. Top Secret
* `MyNameAdapter`: Handles sentences featuring 'my' and 'name'
* `MeAdapter`: Processes the statements showing possessive behavior
* `AboutAdapter`: Defines the personality of sugaroid
* `WikiAdapter`: Handles Wikipedia based questions
* `DoLikeAdapter`: Handles likes of Sugaroid
* `FeelAdapter`: Handles sentences containing the word 'feel'
* `DoAdapter`: Processes statements beginning with 'Do' and 'know'
* `EmotionAdapter`: Handles positive and negative emotional statements
* `DisAdapter`: A complex algorithm sorting the words beginning with negative based on the probability.

     and achieving a similar confidence ratio of the word percentage.

     The `DisAdapter` keeps the confidence below 0.5 so that the `BestAdapter` may find some

     other answer similar to

* `TwoWordAdapter`: Handles sentences having two words
* `OneWordAdapter`: Logical adapter for processing data with one words
* `DebugAdapter`: Internal administrator feature to debug Sugaroid statements
* `WhyWhenAdapter`: Processes `wh`-adverbs
* `ReaderAdapter`: Reads documentation and extracts information
* `ImitateAdapter`: Handles statements involving imitations of some sentences
* `FunAdapter`: Adapter that does fun things 
* `UnitConversion`: The `UnitConversion` logic adapter parse inputs to convert values

#### Boolean Adapter \(`sugaroid.brain.bool.BooleanAdapter`\)

The Boolean Adapter retrieves the input statement and finds for instances of Boolean answers. This includes words like “Yes”, “Yea”, “No”, “True” or “False”. The unique identification code is received from `sugaroid.SugaroidStatement.uid` and then conditionally processes the statements to do a task or direct the answer to another conversations.

#### Akinator Adapter \(`sugaroid.brain.aki.AkinatorAdapter`\)

The Akinator Adapter is a wrapper class, that takes the acts like a server with [akinator.org](https://akinator.org), and then checks the `sugaroid.SugaroidStatement.uid` for the continuity of the question answering sequence. The Akinator class for the session is stored across chat checks, by the help of `sugaroid.SugaroidBot.globals`. The data is temporarily stored into a dictionary, so that it can be received on the next answer.

#### Hangman Adapter \(`sugaroid.brain.aki.Hangman`\)

The Hangman Adapter has the code ehich is used for playing Hangman with the user.
