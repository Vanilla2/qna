import { Question } from "./interfaces";

const questions: Question[] = [
    {
        id: "q1",
        best_answer_id: "a1",
        contents: "Salut, cum ies din viM????",
        downvoters: ["u1", "63aed49cb2b90abd83dff2ab"],
        replies: [
            {
                contents: "Incearca sa faci restart",
                id: "r1",
                replies: [
                    {
                        contents: "Da nu nahui?",
                        id: "rr1",
                        submitter_id: "u1",
                    }
                ],
                submitter_id: "63aed49cb2b90abd83dff2ab",
            }
        ],
        submitter_id: "u1",
        title: "INTREBARE SERIOASA",
        upvoters: ["u3", "u4"]
    },
    {
        id: "q2",
        best_answer_id: "a2",
        contents: "Cum centrez acest div???????",
        downvoters: ["u1", "u2"],
        replies: [
            {
                contents: "text-align: center",
                id: "r2",
                replies: [
                    {
                        contents: "Da nu nahui?",
                        id: "rr2",
                        submitter_id: "u2",
                    }
                ],
                submitter_id: "63aed49cb2b90abd83dff2ab",
            }
        ],
        submitter_id: "u2",
        title: "INTREBARE SERIOASA",
        upvoters: ["63aed49cb2b90abd83dff2ab", "u4"]
    }
]


export {questions};