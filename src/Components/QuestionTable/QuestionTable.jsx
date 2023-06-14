import { Link } from "react-router-dom";
import "./QuestionTable.css";

const QuestionTable = ({ questions, onDelete }) => (
  <div className="QuestionTable">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>date</th>
          <th>Number Of Answers</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {questions.map((question) => (
          <tr key={question.question_id}>
            <td>{question.question_id}</td>
            <td>{question.title}</td>
            <td>{question.created}</td>
            <td>{question.numberOfAnswers}</td>
            <td>

              <button type="button" onClick={() => onDelete(question._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default QuestionTable;
