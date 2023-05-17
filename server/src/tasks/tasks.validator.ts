import { body, ValidationChain } from "express-validator";
import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

export const taskValidator: ValidationChain[] = [

    body('title')
    .not()
    .isEmpty()
    .withMessage('Task title can not be empty')
    .trim()
    .isString()
    .withMessage('Title needs to be written in text format'),

    body('date')
    .not()
    .isEmpty()
    .withMessage('Please select the due date of a task')
    .isString()
    .withMessage('Please select valid date format'),

    body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be written in text format'),

    body('priority')
    .trim()
    .isIn([Priority.normal, Priority.high, Priority.low])
    .withMessage('Please select priority from given values'),

    body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage('Please select status from given values'),

];

export const updateTaskValidator = [

    body('id')
    .not()
    .isEmpty()
    .withMessage('The task id is mandatory')
    .trim()
    .isString()
    .withMessage('Id format is not correct'),

    body('status')
    .trim()
    .isIn([
        Status.todo,
        Status.inProgress,
        Status.completed
    ])
    .withMessage('Please select status from given values'),

];