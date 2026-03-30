function Survey() {
  return (
    <>
      <h2>Adventure Preferences Survey</h2>

      <p>Help us tailor your next adventure experience.</p>

      <form className="form-card">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="adventure">Favorite Adventure Type:</label>
        <select id="adventure">
          <option>Safari</option>
          <option>Mountain Climbing</option>
          <option>Desert Trek</option>
          <option>Jungle Exploration</option>
        </select>

        <p>Experience Level:</p>
        <label>
          <input type="radio" name="level" /> Beginner
        </label>
        <label>
          <input type="radio" name="level" /> Intermediate
        </label>
        <label>
          <input type="radio" name="level" /> Expert
        </label>

        <label htmlFor="comments">Additional Notes:</label>
        <textarea id="comments" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Survey;