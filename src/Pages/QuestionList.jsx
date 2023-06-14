import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import QuestionTable from "../Components/QuestionTable";

const fetchQuestions = () => {
  return fetch("/questions/all").then((res) => res.json());
};

const deleteQuestion = (id) => {
  return fetch(`/question/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const QuestionList = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(null);

  const handleDelete = (id) => {
    deleteQuestion(id);

    setQuestions((questions) => {
      return questions.filter((question) => question._id !== id);
    });
  };

  useEffect(() => {
    fetchQuestions()
      .then((questions) => {
        setLoading(false);
        setQuestions(questions);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <QuestionTable questions={questions} onDelete={handleDelete} />;
};

export default QuestionList;
