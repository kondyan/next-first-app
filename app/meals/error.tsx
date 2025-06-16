"use client";

const Error = ({ error }: { error: React.ReactNode }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
      <p>{error}</p>
    </main>
  );
};

export default Error;
