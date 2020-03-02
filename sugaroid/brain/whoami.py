import random

from chatterbot.conversation import Statement
from chatterbot.logic import LogicAdapter
from nltk import pos_tag

from sugaroid.brain.constants import EMOJI_SMILE, WHO_AM_I, WHO_ARE_YOU, SUGAROID
from sugaroid.brain.ooo import Emotion
from sugaroid.brain.postprocessor import random_response
from sugaroid.brain.preprocessors import normalize
from sugaroid.sugaroid import SugaroidStatement
from sugaroid.ver import version


class WhoAdapter(LogicAdapter):

    def __init__(self, chatbot, **kwargs):
        super().__init__(chatbot, **kwargs)

    def can_process(self, statement):
        self.normalized = normalize(str(statement))
        self.token = pos_tag(self.normalized)
        if 'who' in self.normalized:
            return True
        else:
            return False

    def process(self, statement, additional_response_selection_parameters=None):
        confidence = 1

        if 'i' in self.normalized:
            response = random_response(WHO_AM_I)
        elif 'you' in self.normalized:
            if 'to' in self.normalized:
                confidence = 0.5
                response = 'You!'
            else:
                v = version()
                response = "\n{} \n{}. \nBuild: {}".format(
                    SUGAROID[0], random_response(WHO_ARE_YOU), v.get_commit())
        else:
            response = 'check the wiki'
            confidence = 0

        selected_statement = SugaroidStatement(response)
        selected_statement.confidence = confidence
        emotion = Emotion.neutral
        selected_statement.emotion = emotion

        return selected_statement
