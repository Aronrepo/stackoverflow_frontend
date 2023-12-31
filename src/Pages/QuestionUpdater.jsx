import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionForm from "../Components/QuestionForm";
import Loading from "../Components/Loading";

const updateQuestion = (question) => {
  return fetch(`/api/questions/${question._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  }).then((res) => res.json());
};

const fetchQuestion = (id) => {
  return fetch(`/api/question/${id}`).then((res) => res.json());
};

const QuestionUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [questionLoading, setQuestionLoading] = useState(true);

  useEffect(() => {
    setQuestionLoading(true);
    fetchQuestion(id).then((question) => {
      setQuestion(question);
      setQuestionLoading(false);
    });
  }, [id]);

  const handleUpdateQuestion = (question) => {
    setUpdateLoading(true);
    updateQuestion(question).then(() => {
      setUpdateLoading(false);
      navigate("/");
    });
  };

  if (questionLoading) {
    return <Loading />;
  }

  return (
    <QuestionForm
      question={question}
      onSave={handleUpdateQuestion}
      disabled={updateLoading}
      onCancel={() => navigate("/")}
    />
  );
};

export default QuestionUpdater;
