function Inventory() {
  return (
    <>
      <h2>Adventure Gear Inventory</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Compass</td>
            <td>Essential for navigation</td>
            <td>$15</td>
          </tr>
          <tr>
            <td>Survival Kit</td>
            <td>All-in-one emergency gear</td>
            <td>$45</td>
          </tr>
          <tr>
            <td>Backpack</td>
            <td>Durable and lightweight</td>
            <td>$60</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Inventory;