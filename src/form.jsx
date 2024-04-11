import useFields from "./hooks/useFields";

export default function Form( { handleSubmit }) {
    const [fields, handleChange, resetForm] = useFields({
        noun: "",
        noun2: "",
        adjective: "",
        color: "",
    });

    return (
        <form onSubmit={(evt) => handleSubmit(evt, fields)}>
            <div className="form-group">
                <input
                    id="noun"
                    name="noun"
                    value={fields.noun}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Noun 1"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    id="noun2"
                    name="noun2"
                    value={fields.noun2}
                    onChange={handleChange}
                    placeholder="Noun 2"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    id="adjective"
                    name="adjective"
                    value={fields.adjective}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Adjective"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    id="color"
                    name="color"
                    value={fields.color}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Color"
                    required
                />
            </div>
            <div >
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Get Story
                </button>
            </div>
        </form>
    );
}
