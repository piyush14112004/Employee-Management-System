import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [editingId, setEditingId] = useState(null);

  const API =
    "https://employee-management-system-api-u08n.onrender.com/api/employees";

  const loadEmployees = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Failed to load employees");
      setEmployees(await response.json());
    } catch {
      alert(
        "Could not load employees. Please check the backend connection and try again."
      );
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setDepartment("");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employee = { name, email, department };

    try {
      const response = await fetch(
        editingId ? `${API}/${editingId}` : API,
        {
          method: editingId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee),
        }
      );

      if (!response.ok) throw new Error("Request failed");

      resetForm();
      await loadEmployees();
      alert(editingId ? "Employee updated!" : "Employee added!");
    } catch {
      alert(
        "Could not save the employee. Please check the backend connection and try again."
      );
    }
  };

  const editEmployee = (employee) => {
    setEditingId(employee.id);
    setName(employee.name);
    setEmail(employee.email);
    setDepartment(employee.department);
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      const response = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Delete failed");
      await loadEmployees();
      alert("Employee deleted!");
    } catch {
      alert("Could not delete the employee. Please try again.");
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">E</div>
          <div>
            <h2>EmployEase</h2>
            <p>Employee Management System</p>
          </div>
        </div>
        <span className="status">● System Online</span>
      </header>

      <main className="container">
        <section className="welcome">
          <div>
            <p className="eyebrow">DASHBOARD</p>
            <h1>Employee Management</h1>
            <p>Manage your team, employee details and departments.</p>
          </div>
          <div className="total-card">
            <span>Total Employees</span>
            <strong>{employees.length}</strong>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel form-panel">
            <h2>{editingId ? "Edit Employee" : "Add New Employee"}</h2>
            <p className="muted">Enter employee details below.</p>

            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter employee name"
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
              />

              <label>Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="">Select department</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
              </select>

              <button className="primary-btn" type="submit">
                {editingId ? "Save Changes" : "+ Add Employee"}
              </button>

              {editingId && (
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>

          <div className="panel table-panel">
            <div className="table-heading">
              <div>
                <h2>Employee Directory</h2>
                <p className="muted">Your team members</p>
              </div>
              <button className="refresh-btn" onClick={loadEmployees}>
                Refresh
              </button>
            </div>

            {employees.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">👥</div>
                <h3>No employees found</h3>
                <p>Add your first employee using the form.</p>
              </div>
            ) : (
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Employee</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr key={employee.id}>
                        <td>#{employee.id}</td>
                        <td className="employee-name">{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>
                          <span className="department">
                            {employee.department}
                          </span>
                        </td>
                        <td>
                          <div className="actions">
                            <button
                              className="edit-btn"
                              onClick={() => editEmployee(employee)}
                            >
                              Edit
                            </button>
                            <button
                              className="delete-btn"
                              onClick={() => deleteEmployee(employee.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <footer>EmployEase · Employee Management System</footer>
      </main>
    </div>
  );
}

export default App;
