import FormRow from "./FormRow";
import Input from "./Input";
import FormLabel from "./FormLabel";

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
      <form className="flex flex-col gap-4">
        <FormRow>
          <FormLabel htmlFor="first_name">first name</FormLabel>
          <Input type="text" id="first_name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="last_name">last name</FormLabel>
          <Input type="text" id="last_name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="company_name">company name (optional)</FormLabel>
          <Input type="text" id="company_name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="country">country</FormLabel>
          <select
            name="country"
            id="country"
            className="rounded-sm border-[0.5px] border-primary-50 bg-white-50 p-2 text-sm text-primary-800 outline-none"
          >
            <option value="india">india</option>
            <input type="submit" value="submit" />
          </select>
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="street_address">street address</FormLabel>
          <Input type="text" id="street_address" />
          <Input type="text" id="street_address" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="city">city/town</FormLabel>
          <Input type="text" id="city" />
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
