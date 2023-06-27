import { Link, useNavigate, useParams } from "react-router-dom";
import "./AnswerList.css";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const fetchAnswers = (id) => {
  return fetch(`/answers/${id}`).then((res) => res.json());
};

const deleteAnswer = (id) => {
  return fetch(`/answers/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};


const AnswerList = ({ onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(null);
  //const [updateLoading, setUpdateLoading] = useState(false);
  const [answerLoading, setAnswerLoading] = useState(true);

  const handleDelete = (id) => {
    deleteAnswer(id);
  
    setAnswers((answers) => {
      return answers.filter((answer) => answer.answer_id !== id);
    });
  };

  useEffect(() => {
    setAnswerLoading(true);
    fetchAnswers(id).then((answers) => {
      setAnswers(answers);
      setAnswerLoading(false);
    });
  }, [id]);

  if (answerLoading) {
    return <Loading />;
  }

  return (
  <div className="AnswerList">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Answer</th>
          <th>date</th>
          <th>Created by</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {answers.map((answer) => (
          <tr key={answer.answer_id}>
            <td>{answer.answer_id}</td>
            <td>{answer.answer}</td>
            <td>{answer.created}</td>
            <td>{answer.numberOfAnswers}</td>
            <td>

              <button type="button" onClick={() => handleDelete(answer.answer_id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> )
};

export default AnswerList;
