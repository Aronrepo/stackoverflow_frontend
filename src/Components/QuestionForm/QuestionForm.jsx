const QuestionForm = ({ onSave, disabled, question, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const question = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(question);
  };

  return (
    <form className="QuestionForm" onSubmit={onSubmit}>
      {question && (
        <input type="hidden" name="name" defaultValue={question.name} />
      )}
    </form>
  );
};

export default QuestionForm;
