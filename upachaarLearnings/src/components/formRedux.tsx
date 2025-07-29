import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../slice/formSlice";
import type { RootState } from "../store/store";

const FormRedux = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.form.users);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    education: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addUser({
        ...form,
        age: parseInt(form.age),
      })
    );
    setForm({ name: "", email: "", address: "", age: "", education: "" });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "address", "age", "education"].map((field) => (
          <div key={field}>
            <label className="capitalize">{field}:</label>
            <input
              className="border p-2 w-full"
              type={
                field === "age"
                  ? "number"
                  : field === "email"
                  ? "email"
                  : "text"
              }
              name={field}
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-bold">Stored Users:</h3>
        {users.length === 0 && <p>No users submitted yet.</p>}
        {users.map((user, index) => (
          <div key={index} className="border p-2 my-2 rounded shadow">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Education:</strong> {user.education}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRedux;
