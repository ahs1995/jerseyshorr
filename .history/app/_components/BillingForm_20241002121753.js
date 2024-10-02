const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

function BillingForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="first_name">first name</label>
          <input type="text" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">last name</label>
          <input type="text" id="last_name" />
        </div>
        <div>
          <label htmlFor="company_name">company name (optional)</label>
          <input type="text" id="company_name" />
        </div>
        <div>
          <label htmlFor="country">country</label>
          <select name="country" id="country">
            <option value="india">india</option>
            <input type="submit" value="submit" />
          </select>
        </div>
        <div>
          <label htmlFor="street_address">street address</label>
          <input type="text" id="street_address" />
          <input type="text" id="street_address" />
        </div>
        <div>
          <label htmlFor="city">city/town</label>
          <input type="text" id="city" />
        </div>
        <div>
          <label htmlFor="city">state</label>
          <select name="state" id="state">
            {states.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pin_code">PIN code</label>
          <input type="number" id="pin_code" />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input type="number" id="phone" />
        </div>
        <div>
          <label htmlFor="email">email address</label>
          <input type="nemail" id="email" />
        </div>
        <div>
          <label htmlFor="order_notes">order notes (optional)</label>
          <textarea
            name="order_notes"
            id="order_notes"
            placeholder="notes about your order"
          />
        </div>
      </form>
    </div>
  );
}

export default BillingForm;
