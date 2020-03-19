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


import nltk
from chatterbot.logic import LogicAdapter
from nltk.sentiment import SentimentIntensityAnalyzer

from sugaroid.brain.constants import BOT_NEUTRAL, BOT_NEUTRAL_NOUN, BOT_POSITIVE_NOUN, BOT_POSITIVE
from sugaroid.brain.postprocessor import random_response

from sugaroid.brain.ooo import Emotion
from sugaroid.sugaroid import SugaroidStatement

SUGAROID_LIKES = {
    'birds': "I like birds a lot. Some of them look similar to me. "
             "One of my creator's friend said I look like a Puffin, but I don't believe it",
    'animals': "I love all the animals alike. I'm afraid, I do not have a favorite.",
    'sweets': "I like donuts a lot. So do I like all of the desserts which come under the Android naming lineage. "
              "I could have added one more to my list, if Android Q had a relatable dessert",
    'number': "Yup, my favorites is 1, coz that\'s when I am alive",
    'weapon': "No, I do not like weapons. I guess my heart is a weapon of mass destruction"
}


class DoLikeAdapter(LogicAdapter):
    """
    Handles likes of Sugaroid
    """
    def __init__(self, chatbot, **kwargs):
        super().__init__(chatbot, **kwargs)
        self.normalized = False

    def can_process(self, statement):
        self.normalized = nltk.word_tokenize(str(statement).lower())
        if ('do' in self.normalized or 'did' in self.normalized) and 'like' in self.normalized:
            return True
        else:
            return False

    def process(self, statement, additional_response_selection_parameters=None):
        emotion = Emotion.neutral
        response = 'ok'
        confidence = 0
        tokenized = self.chatbot.lp.tokenize(str(statement))
        if 'you' in self.normalized and 'I' not in self.normalized:
            sia = SentimentIntensityAnalyzer()
            scores = sia.polarity_scores(str(statement))
            nn = False
            vb = False
            for i in tokenized:
                if str(i.tag_).startswith('N'):
                    nn = i.lemma_
                elif str(i.tag_).startswith('VB'):
                    vb = i.lemma_
            if scores['neu'] == 1:
                if nn:
                    response = random_response(BOT_NEUTRAL_NOUN)
                elif vb:
                    response = random_response(BOT_NEUTRAL_NOUN).format(nn="to {vb}")
                else:
                    response = random_response(BOT_NEUTRAL)
            elif scores['pos'] > scores['neg']:
                if nn:
                    response = random_response(BOT_POSITIVE_NOUN)
                elif vb:
                    response = random_response(BOT_POSITIVE_NOUN).format(nn="to {vb}")
                else:
                    response = random_response(BOT_POSITIVE)
            else:
                if nn:
                    response = "No. I don't like {nn}"
                elif vb:
                    response = "No do not like to {vb}"
                else:
                    response = "Of course not."
            if nn:
                response = SUGAROID_LIKES.get(nn, response)
        elif 'I' in self.normalized:
            if 'you' in self.normalized:
                response = "I thought you should like me. Am I not adorable?"
            else:
                response = "Well. I don't know. I am sorry. Only you can think inside your heart"
        else:
            nn = False
            for i in tokenized:
                if str(i.tag_).startswith('N'):
                    nn = i.lemma_
            if nn:
                response = 'Well, try asking {nn}'
            else:
                response = "Hmm, Well I don't know"

        selected_statement = SugaroidStatement(response.format(nn=nn, vb=vb))
        selected_statement.confidence = confidence

        selected_statement.emotion = emotion
        return selected_statement
