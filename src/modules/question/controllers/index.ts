import { CreateQuestionController } from './create.question.controller'
import { ListQuestionController } from './list.question.controller'
import { DeleteQuestionController } from './delete.question.controller'
import { QuizQuestionController } from './quiz.question.controller'
import { EditQuestionController } from './edit.question.controller'

export const questionControllers = [
  CreateQuestionController,
  ListQuestionController,
  DeleteQuestionController,
  EditQuestionController,
  QuizQuestionController
]

