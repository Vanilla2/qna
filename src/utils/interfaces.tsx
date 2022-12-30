
// type UserLoginResponse struct {
// 	Token string `json:"token"`
// }

// type User struct {
// 	Id       string `json:"id"`
// 	Email    string `json:"email"`
// 	Password string `json:"password"`
// 	Rating   int64  `json:"rating"`
// }

// type Reply struct {
// 	Id          string `json:"id"`
// 	Contents    string `json:"contents"`
// 	SubmitterId string `json:"submitter_id"`
// }

// type Answer struct {
// 	Id          string  `json:"id"`
// 	Contents    string  `json:"contents"`
// 	SubmitterId string  `json:"submitter_id"`
// 	Replies     []Reply `json:"replies"`
// }

// type Question struct {
// 	Id         string   `json:"id"`
// 	SumitterId string   `json:"submitter_id"`
// 	Title      string   `json:"title"`
// 	Contents   string   `json:"contents"`
// 	Answers    []Answer `json:"replies"`
// 	BestAnswer string   `json:"best_answer_id"`
// 	Upvoters   []string `json:"upvoters"`
// 	Downvoters []string `json:"downvoters"`
// }

// // for questions only
// type EditSuggestion struct {
// 	Id          string `json:"id"`
// 	QuestionId  string `json:"question_id"`
// 	SubmitterId string `json:"submitter_id"`
// 	Contents    string `json:"contents"`
// 	EditStatus  string `json:"edit_status"` // default,approve,reject
// }


interface User {
    email: string,
    user_id?: string,
    password?: string,
    rating?: number,
    exp?: number,
};

interface EditSuggestion {
    id: string,
    question_id: string,
    submitter_id: string,
    contents: string,
    edit_status: "default" | "approve" | "reject"
}

interface Reply {
    id: string,
    contents: string,
    submitter_id: string
}

interface Answer {
    id: string,
    contents: string,
    submitter_id: string,
    replies: Reply[]
}

interface Question {
    id: string,
    submitter_id: string,
    title: string,
    contents: string,
    replies: Answer[],
    best_answer_id: string,
    upvoters: string[],
    downvoters: string[]
}

export type {User, Question};