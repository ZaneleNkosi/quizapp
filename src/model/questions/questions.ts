export interface QuestionsModel {
    questionNo: string,
    question: string,
    options: [
        { option: string },
        { option: string },
        { option: string },
        { option: string }
    ]
}