export default function RecipeList({ recipes }) {
  return (
    <>
      {recipes.map((r) => (
        <div key={r._id}>
          <h3>{r.title}</h3>
          <p>{r.ingredients}</p>
        </div>
      ))}
    </>
  );
}