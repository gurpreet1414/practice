export default function UsersLayout({ children }) {
    return (
      <div style={{ border: "2px solid #000", padding: "1rem" }}>
        <h2>Users Section</h2>
        {children}
      </div>
      
    );
  }
  