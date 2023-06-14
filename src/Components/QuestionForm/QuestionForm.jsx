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
      <div className="control">
        <label htmlFor="title">Question:</label>
        <input
          defaultValue={question ? question.name : null}
          name="title"
          id="title"
        />
      </div>

      <div className="control">
        <label htmlFor="description">Description:</label>
        <input
          defaultValue={question ? question.level : null}
          name="description"
          id="description"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {question ? "Update Question" : "Create Question"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;
