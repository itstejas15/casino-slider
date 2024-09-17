import Link from "next/link";

const Games = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <h2>All Games Page</h2>
      <div style={{ marginTop: '1rem' }}>
        <Link href={"/"}>
          <button style={{
            padding: '6px 14px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#0070f3',
            color: '#fff',
            transition: 'background-color 0.3s'
          }}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Games;
