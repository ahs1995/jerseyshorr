import FormRow from "./FormRow";

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
    <div className="border-2 border-primary-800">
      <form>
        <FormRow>
          <label htmlFor="first_name">first name</label>
          <input
            type="text"
            id="first_name"
            className="rounded-sm bg-white-50 p-1 shadow-md outline-none"
          />
        </FormRow>
        <FormRow>
          <label htmlFor="last_name">last name</label>
          <input type="text" id="last_name" />
        </FormRow>
        <FormRow>
          <label htmlFor="company_name">company name (optional)</label>
          <input type="text" id="company_name" />
        </FormRow>
        <FormRow>
          <label htmlFor="country">country</label>
          <select name="country" id="country">
            <option value="india">india</option>
            <input type="submit" value="submit" />
          </select>
        </FormRow>
        <FormRow>
          <label htmlFor="street_address">street address</label>
          <input type="text" id="street_address" />
          <input type="text" id="street_address" />
        </FormRow>
        <FormRow>
          <label htmlFor="city">city/town</label>
          <input type="text" id="city" />
        </FormRow>
        <FormRow>
          <label htmlFor="city">state</label>
          <select name="state" id="state">
            {states.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow>
          <label htmlFor="pin_code">PIN code</label>
          <input type="number" id="pin_code" />
        </FormRow>
        <FormRow>
          <label htmlFor="phone">phone</label>
          <input type="number" id="phone" />
        </FormRow>
        <FormRow>
          <label htmlFor="email">email address</label>
          <input type="email" id="email" />
        </FormRow>
        <FormRow>
          <label htmlFor="order_notes">order notes (optional)</label>
          <textarea
            name="order_notes"
            id="order_notes"
            placeholder="notes about your order"
          />
        </FormRow>
      </form>
    </div>
  );
}

export default BillingForm;
