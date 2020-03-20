"""
MIT License

Sugaroid Artificial Intelligence
Chatbot Core
Copyright (c) 2020 Srevin Saju

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

"""

from sugaroid.reader.scrawled import SCRAWLED
from chatterbot.logic import LogicAdapter
from sugaroid.brain.ooo import Emotion
from sugaroid.brain.preprocessors import normalize
from sugaroid.sugaroid import SugaroidStatement


class ReaderAdapter(LogicAdapter):
    """
    Logical adapter for processing data with one words
    """

    def __init__(self, chatbot, **kwargs):
        super().__init__(chatbot, **kwargs)
        self.normalized = None
        self.intersect = None
        self.tokenized = None

    def can_process(self, statement):
        self.normalized = normalize(str(statement).lower())

        if 'reader' in self.normalized:
            return True
        else:
            return False

    def process(self, statement, additional_response_selection_parameters=None):
        emotion = Emotion.seriously
        confidence = 0.60
        response = "I couldn't find a similar heading in scrawled data"
        cleaned_text = []
        for i in self.chatbot.lp.tokenize(str(statement)):
            if i.is_stop:
                pass
            elif i.lower_ == 'reader':
                pass
            else:
                cleaned_text.append(str(i.lower_))

        similarity = self.chatbot.lp.similarity
        for file in SCRAWLED:
            headings, content = SCRAWLED[file]
            for heading in headings:
                if similarity(str(statement).lower(), str(heading).lower()) > 0.9:
                    response = ' '.join(content)
                    break

        selected_statement = SugaroidStatement(response)
        selected_statement.confidence = confidence
        selected_statement.emotion = emotion
        selected_statement.adapter = None
        return selected_statement
