import { Link } from "react-router-dom";
import "./QuestionTable.css";

const QuestionTable = ({ questions, onDelete }) => (
  <div className="EmployeeTable">
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
          <tr key={question.id}>
            <td>{question.questionId}</td>
            <td>{question.name}</td>
            <td>{question.date}</td>
            <td>{question.numberOfAnswers}</td>
            <td>
              <Link to={`/update/${question._id}`}>
                <button type="button">Update</button>
              </Link>
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
